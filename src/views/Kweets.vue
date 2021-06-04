<template>
  <div v-if="$auth.isAuthenticated && !$auth.loading">
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p
            class="mt-6 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Kweets
          </p>
          <br />
        </div>

        <ul id="example-1">
          <div class="flex flex-wrap justify-evenly">
            <div class="flex-initial">
              <div class="flex-col p-4 space-y-4 bg-white rounded-md">
                <div>
                  <h2 class="text-2xl font-bold">New Kweet</h2>
                  <p>Let us know what's on your mind.</p>
                </div>
                <div>
                  <v-input
                    type="textarea"
                    placeholder="Type kweet here"
                    v-model="kweet.kweet"
                  />
                </div>
              </div>
              <div>
                <v-button @click="createKweet">
                  <slot>Post kweet</slot>
                </v-button>
              </div>

              <br /><br /><br />

              <p class="tracking-tight sm:text-4xl">My feed</p>
              <li v-for="merge in merged" :key="merge.id">
                <!-- Start of component -->
                <div
                  class="bg-white border-2 border-gray-300 p-2 tracking-wide shadow-lg"
                >
                  <div id="header" class="flex items-center mb-4">
                    <router-link :to="{ path: 'Profile', params: { name: merge.name }}">
                      <img
                        alt="avatar"
                        class="w-20 rounded-full border-2 border-gray-300"
                        :src="merge.imageUrl"
                      />
                    </router-link>
                    <a :href="'profile/' + merge.name">

                    </a>
                    <div id="header-text" class="leading-5 ml-6 sm">
                      <h4 id="name" class="text-xl font-semibold">
                        <a :href="'profile/' + merge.name">@{{ merge.name }}</a>
                      </h4>
                    </div>
                  </div>
                  <div id="quote">
                    <q class="italic text-gray-600">{{ merge.kweet }}</q>
                  </div>
                </div>
                <!-- End of component -->
              </li>
              <infinite-loading spinner="spiral" @infinite="GetMoreKweets">
                <div slot="no-more"></div>
              </infinite-loading>
            </div>

            <div class="flex-initial place-self-stretch">
              <p class="max-w-2xl text-xl text-gray-500 lg:mx-auto">
                What's trending on <b>Kwetter</b>?
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InfiniteLoading from "vue-infinite-loading";

import KweetService from "@/modules/kweet/kweetService";
import ProfileService from "@/modules/profile/profileService";
import { CreateKweetRequest } from "@/modules/kweet/dto/request/create-kweet.request";

@Component({
  name: "Kweets",
  components: {
    InfiniteLoading,
  },
  data() {
    return {};
  },
})
export default class Kweets extends Vue {
  private kweet: CreateKweetRequest = {
    kweet: "",
    ownerId: "",
  };

  private kweets = [];
  private profiles = [];
  private merged = [];
  private addToMerged = [];
  private currentPage = 0;
  private pageAmount = 1;
  private timeline = false;
  private moreKweetsResponse = [];

  async created() {
    this.kweets = await KweetService.getAllKweets(
      await this.$auth.getTokenSilently({}),
      this.currentPage
    ).then((res) => {
      this.calculatePageNumber(res.data);
      return res.data.data;
    });
    this.profiles = await ProfileService.getAllProfiles(
      await this.$auth.getTokenSilently({})
    ).then((res) => {
      return res.data;
    });

    for (let i = 0; i < this.kweets.length; i++) {
      this.merged.push({
        ...this.kweets[i],
        ...this.profiles.find(
          (itmInner) => itmInner.ownerId === this.kweets[i].ownerId
        ),
      });
    }
  }

  async calculatePageNumber(data) {
    this.pageAmount = Math.ceil(data.count / 10);
  }

  async GetMoreKweets($state) {
    if (this.currentPage == this.pageAmount) {
      $state.complete();
    } else {
      this.profiles = await ProfileService.getAllProfiles(
        await this.$auth.getTokenSilently({})
      ).then((res) => {
        return res.data;
      });

      this.currentPage++;
      this.moreKweetsResponse = await KweetService.getAllKweets(
        await this.$auth.getTokenSilently({}),
        this.currentPage
      ).then((res) => {
        return res.data.data;
      });

      console.log(this.moreKweetsResponse);
      console.log(this.profiles);

      for (let i = 0; i < this.kweets.length; i++) {
        this.merged.push({
          ...this.moreKweetsResponse[i],
          ...this.profiles.find(
            (itmInner) =>
              itmInner.ownerId === this.moreKweetsResponse[i].ownerId
          ),
        });
      }

      this.merged = this.merged.concat(this.addToMerged);
      $state.loaded();
    }
  }

  async contentSwap() {
    if (this.timeline == false) {
      this.timeline = true;
    } else {
      this.timeline = false;
    }
  }

  private async createKweet() {
    this.kweet.ownerId = this.$auth.user.sub;
    await this.$store.dispatch("kweet/createKweet", this.kweet);
    await this.$store.dispatch("kweet/getKweets");
    await this.$router.push({ name: "Kweets" });
  }
}
</script>