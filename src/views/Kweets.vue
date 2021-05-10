<template>
  <div v-if="$auth.isAuthenticated">
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
          <div class="flex flex-wrap">
            <div class="flex-auto items-center">
              <li v-for="kweet in kweets" :key="kweet.id">
                <!-- Start of component -->
                <div
                  class="md:max-w-lg w-screen bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg"
                >
                  <div id="header" class="flex items-center mb-4">
                    <img
                      alt="avatar"
                      class="w-20 rounded-full border-2 border-gray-300"
                      src="https://picsum.photos/seed/picsum/200"
                    />
                    <div id="header-text" class="leading-5 ml-6 sm">
                      <h4 id="name" class="text-xl font-semibold">
                        {{ kweet.name }}
                      </h4>
                    </div>
                  </div>
                  <div id="quote">
                    <q class="italic text-gray-600">{{ kweet.kweet }}</q>
                  </div>
                </div>
                <!-- End of component -->
              </li>
              <infinite-loading spinner="spiral" @infinite="GetMoreKweets">
                <div slot="no-more"></div>
              </infinite-loading>
            </div>

            <div class="flex-initial">
              <p class="max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Post new <b>Kweet</b>? <em class="text-light">(up to 140 characters)</em>
              </p>
              <form class="w-full max-w-sm">
                <div class="flex items-center border-b border-teal-500 py-2">
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="What's on your mind?"
                    aria-label="Full name"
                    v-model="kweet"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    maxlength="140"
                  />
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  > Post Kweet
                  </button>
                </div>
              </form>

              <br /><br /><br /><br />

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
import KweetService from "@/services/kweetService";
import InfiniteLoading from "vue-infinite-loading";

@Component({
  components: {
    InfiniteLoading,
  },
  data() {
    return {};
  },
})
export default class Kweets extends Vue {
  private kweets = [];
  private currentPage = 0;
  private pageAmount = 1;
  private enableInfinitLoad = false;
  private timeline = false;

  async created() {
    const auth = await this.$auth.getUser();
    this.kweets = await KweetService.getAllKweets(
      await this.$auth.getTokenSilently({}),
      this.currentPage
    ).then((res) => {
      this.calculatePageNumber(res.data);
      this.enableInfinitLoad = true;
      return res.data.data;
    });
  }

  async calculatePageNumber(data) {
    this.pageAmount = Math.ceil(data.count / 10);
    console.log(this.pageAmount);
  }

  async GetMoreKweets($state) {
    if (this.currentPage == this.pageAmount) {
      $state.complete();
    } else {
      this.currentPage++;
      const response = await KweetService.getAllKweets(
        await this.$auth.getTokenSilently({}),
        this.currentPage
      );
      this.kweets = this.kweets.concat(response.data.data);
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
}
</script>