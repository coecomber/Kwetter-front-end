<template>
  <div class="home" v-if="!$auth.loading">
    <img
      alt="Kwetter logo"
      src="../assets/kwetter.png"
      style="margin-left: auto; margin-right: auto"
      v-if="!$auth.isAuthenticated"
    />
    <Login v-if="!$auth.isAuthenticated" msg="Kwetter." />

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button
        class="mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        v-if="!$auth.isAuthenticated"
        @click="login"
      >
        Log in
      </button>
      <!-- show logout when authenticated -->
      <!-- <button v-if="$auth.isAuthenticated" @click="logout">Log out</button> -->
      <div v-if="$auth.isAuthenticated">
        <!-- This example requires Tailwind CSS v2.0+ -->

        <div class="py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              <p
                class="mt-6 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                The best way to share your life.
              </p>
              <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                From Facebook to Instagram to Snapchat.
              </p>
              <p class="max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Welcome to the new age. The <b>Kwetter</b> age.
              </p>
            </div>

            <div class="mt-20">
              <dl
                class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
              >
                <div class="relative">
                  <dt>
                    <div
                      class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >
                      <!-- Heroicon name: outline/globe-alt -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                      </svg>
                    </div>
                    <p
                      class="ml-16 text-lg leading-6 font-medium text-gray-900"
                    >
                      Privacy
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    We will collect only the bare minimum data to keep our
                    website working.
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <div
                      class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >
                      <!-- Heroicon name: outline/scale -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p
                      class="ml-16 text-lg leading-6 font-medium text-gray-900"
                    >
                      No hidden fees
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Kwetter is and will always be completely free.
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <div
                      class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >
                      <!-- Heroicon name: outline/lightning-bolt -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p
                      class="ml-16 text-lg leading-6 font-medium text-gray-900"
                    >
                      Fully runs on donations as a hobby project
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Completely made as a passion project by @Joost. For more
                    information or questions find me on Twitter!
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <div
                      class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >
                      <!-- Heroicon name: outline/annotation -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    <p
                      class="ml-16 text-lg leading-6 font-medium text-gray-900"
                    >
                      Mobile notifications
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Optimized for mobile! Install our application to get mobile
                    notifications.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <router-link
        v-if="$auth.isAuthenticated"
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        to="/kweet"
      >
        Get kweeting!
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Login from "@/components/Login.vue"; // @ is an alias to /src
import ProfileService from "@/modules/profile/profileService";

@Component({
  components: {
    Login,
  },
  data: function () {},
})
export default class Home extends Vue {
  private ownerId = "";

  async mounted() {
    setTimeout(async () => {
      try {
        await ProfileService.GetCheckProfileByOwnerId(
          await this.$auth.getTokenSilently({}),
          await this.$auth.user.sub
        ).then((res) => {
          console.log(res);
          if (res.data.ownerId == undefined) {
            console.log("router push");
            this.$router.push("CreateProfile");
          }
        });
      } catch (ex) {
        //No user logged in OR logged in user doesn't have a profile yet
        console.log(ex);
      }
    }, 600);
  }

  login() {
    this.$auth.loginWithRedirect({});
  }

  // Log the user out
  logout() {
    this.$auth.logout({
      returnTo: window.location.origin,
    });
  }
}
</script>
