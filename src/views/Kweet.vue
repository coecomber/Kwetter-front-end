<template>
  <div v-if="$auth.isAuthenticated && !$auth.loading">
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul id="example-1">
          <div class="flex flex-wrap justify-evenly">
            <div class="flex-initial">
              
              <div
                class="bg-white border-2 border-gray-300 p-2 tracking-wide shadow-lg"
              >
                <div id="header" class="flex items-center mb-4">
                  <router-link
                    :to="{
                      name: 'Profile',
                      params: { name: 'kweet.name' },
                    }"
                  >
                    <img
                      alt="avatar"
                      class="w-20 rounded-full border-2 border-gray-300"
                      src="https://outdoorvalley.nl/wp-content/uploads/2020/05/SON4830-scaled.jpg"
                    />
                  </router-link>
                  <router-link
                    :to="{
                      name: 'Profile',
                      params: { name: kweet.name },
                    }"
                  >
                    <div id="header-text" class="leading-5 ml-6 sm">
                      <h4 id="name" class="text-xl font-semibold">
                        <a :href="'profile/' + kweet.name"
                          >@Dr. Joost</a
                        >
                      </h4>
                    </div>
                  </router-link>
                  <div class="flex-auto text-right align-top">
                    <p class="text-xs ml-2">
                      
                    </p>
                  </div>
                </div>
                <router-link
                  :to="{
                    name: 'Kweet',
                    params: { id: kweet.kweetId },
                  }"
                >
                  <div id="quote">
                    <q class="italic text-gray-600">{{
                      kweet.kweet
                    }}</q>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Kweet",
  components: {},
  data() {
    return {
      kweet: {},
    };
  },
})
export default class Kweet extends Vue {
  created() {
    if (this.$route.params.id) {
      this.fetchKweet(this.$route.params.id);
    }
  }

  private fetchKweet(uuid: string) {
    this.$store
      .dispatch("kweet/getKweet", uuid)
      .then((res: any) => {
        console.log(res);
        this.$data.kweet = res.data;
      })
      .catch((err: any) => {
        this.$router.push("/");
      });
  }
}
</script>