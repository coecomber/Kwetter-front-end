<template>
  <div v-if="$auth.isAuthenticated && !$auth.loading">
    <div class="flex flex-wrap justify-evenly">
      <div class="max-w-7xl flex-col p-4 space-y-4 bg-white rounded-md">
        <div>
          <h2 class="text-2xl font-bold">Create Profile</h2>
          <p>Please finish your profile before you continue on Kwetter.</p>
          <br>
        </div>
        <p class="text-left">Username (Required)</p>
        <div>
          <v-input
            type="text"
            placeholder="How do you want to be known on kwetter?"
            v-model="profile.name"
            rows="1"
            max="20"
            min="4"
          />
        </div>
        <br>
        <p class="text-left">Description</p>
        <div>
          <v-input
            type="textarea"
            placeholder="Bio"
            v-model="profile.description"
          />
        </div>
        <br>
        <p class="text-left">Occupation</p>
        <div>
          <v-input
            type="text"
            placeholder="Occupation"
            v-model="profile.occupation"
          />
        </div>

        <div>
          <v-button @click="createProfile">
            <slot>Create profile</slot>
          </v-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { CreateProfileRequest } from "@/modules/profile/dto/request/create-profile.request";

@Component({
  name: "Kweets",
  components: {},
  data() {
    return {};
  },
})
export default class Kweets extends Vue {
  async mounted() {
    if (!this.$auth.loading && this.$auth.isAuthenticated) {
      await this.$store.dispatch("profile/getProfiles").then((res) => {
        console.log(res.data)

        this.$auth.getUser().then((user) => {
          for (let i = 0; i < res.data.length; i++) {
            console.log(res[i])
          }
          });

      });
    }
  }

  private profile: CreateProfileRequest = {
    name: "",
    ownerId: "",
    description: "",
    imageUrl: "",
    occupation: "",
    facebookLink: "",
    twitterLink: "",
    githubLink: "",
    instagramLink: "",
    youtubeLink: "",
  };

  private createProfile() {
    this.profile.ownerId = this.$auth.user.sub;
    this.profile.imageUrl = this.$auth.user.picture;
    this.$store.dispatch("profile/createProfile", this.profile);
    this.$router.push("kweet");
  }
}
</script>