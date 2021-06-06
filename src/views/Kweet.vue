<template>
  <div v-if="$auth.isAuthenticated && !$auth.loading">
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul id="example-1">
          <div class="flex flex-wrap justify-evenly">
            <div class="flex-initial">
              <p>Kweet!</p>
              <p>This is the Kweet page for a individual kweet!</p>
              <p>{{ kweet.kweet }}</p>
              <p>Posted by {{ kweet.ownerId }}</p>
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