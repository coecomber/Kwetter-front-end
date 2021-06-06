<template>
  <div v-if="$auth.isAuthenticated && !$auth.loading && loaded">
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

              <div>
                <li
                  v-for="mergeFromStore in mergedFromStore"
                  :key="mergeFromStore.kweetId"
                >
                  <div
                    class="bg-white border-2 border-gray-300 p-2 tracking-wide shadow-lg"
                  >
                    <div id="header" class="flex items-center mb-4">
                      <router-link
                        :to="{
                          name: 'Profile',
                          params: { name: mergeFromStore.name },
                        }"
                      >
                        <img
                          alt="avatar"
                          class="w-20 rounded-full border-2 border-gray-300"
                          :src="mergeFromStore.imageUrl"
                        />
                      </router-link>
                      <router-link
                        :to="{
                          name: 'Profile',
                          params: { name: mergeFromStore.name },
                        }"
                      >
                        <div id="header-text" class="leading-5 ml-6 sm">
                          <h4 id="name" class="text-xl font-semibold">
                            <a :href="'profile/' + mergeFromStore.name"
                              >@{{ mergeFromStore.name }}</a
                            >
                          </h4>
                        </div>
                      </router-link>
                      <div class="flex-auto text-right align-top">
                        <p class="text-xs ml-2">
                          {{ moment(mergeFromStore.kweetCreated).fromNow() }}
                        </p>
                      </div>
                    </div>
                    <router-link
                      :to="{
                        name: 'Kweet',
                        params: { id: mergeFromStore.kweetId },
                      }"
                    >
                      <div id="quote">
                        <q class="italic text-gray-600">{{
                          mergeFromStore.kweet
                        }}</q>
                      </div>
                    </router-link>
                  </div>
                </li>
              </div>
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
import { CreateKweetRequest } from "@/modules/kweet/dto/request/create-kweet.request";
import moment from "moment-timezone";
moment.tz.setDefault("Europe/Amsterdam");

@Component({
  name: "Kweets",
  components: {
    InfiniteLoading,
  },
  data() {
    return {
      moment: moment,
    };
  },
})
export default class Kweets extends Vue {
  async mounted() {
    await this.$store.dispatch("kweet/getKweets").then((res) => {
      this.kweetsFromStore = res.data;
    });
    await this.$store.dispatch("profile/getProfiles").then((res) => {
      this.profilesFromStore = res.data;
    });
    this.mergedFromStore.splice(0, 1);
    this.loaded = true;
  }

  private kweetsFromStore = [{}];
  private profilesFromStore = [{}];
  private mergedFromStore = [{}];
  private loaded = false;

  private kweet: CreateKweetRequest = {
    kweet: "",
    ownerId: "",
  };

  private currentPage = 0;
  private maximumPageAmount = 10;
  private timeline = false;
  private moreKweetsResponse = [];

  async GetMoreKweets($state) {
    if (this.currentPage == this.maximumPageAmount) {
      $state.complete();
    } else {
      
      this.moreKweetsResponse = await KweetService.getAllKweetsByPageNumber(
        await this.$auth.getTokenSilently({}),
        this.currentPage
      ).then((res) => {
        this.currentPage++;
        return res.data.data;
      });

      for (let i = 0; i < this.moreKweetsResponse.length; i++) {
        let createdFormat = moment
          .utc(String(this.moreKweetsResponse[i].kweetCreated))
          .format("YYYY-MM-DD hh:mm a");
        this.moreKweetsResponse[i].kweetCreated = createdFormat;
      }

      for (let i = 0; i < this.moreKweetsResponse.length; i++) {
        await this.mergedFromStore.push({
          ...this.moreKweetsResponse[i],
          ...this.profilesFromStore.find(
            (itmInner) =>
              itmInner.ownerId === this.moreKweetsResponse[i].ownerId
          ),
        });
      }

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

    //Adds just posted kweet to mergedFromStore data to show in our v-for
    await this.$data.mergedFromStore.unshift({
      ...this.kweet,
      ...this.profilesFromStore.find(
        (itmInner) => itmInner.ownerId === this.kweet.ownerId
      ),
    });
  }
}
</script>