<template>
  <div v-if="$auth.isAuthenticated && !$auth.loading">
    <div class="flex flex-wrap justify-evenly">
      <div class="max-w-7xl flex-col p-4 space-y-4 bg-white rounded-md">
        <div>
          <h2 class="text-2xl font-bold">Create Profile</h2>
          <p>Please finish your profile before you continue on Kwetter.</p>
        </div>
        <p>Username (Required)</p>
        <div>
          <v-input
            type="textarea"
            placeholder="How do you want to be known on kwetter?"
            v-model="profile.name"
            rows="1"
            max=20
            min="4"
          />
        </div>
        <p>Description</p>
        <div>
          <v-input
            type="textarea"
            placeholder="Tell something about yourself for people visiting your profile"
            v-model="profile.description"
          />
        </div>
        <p>Occupation</p>
        <div>
          <v-input
            type="textarea"
            placeholder="If you want to share, type your occupation here"
            v-model="profile.occupation"
          />
        </div>
        <p>Facebook link</p>
        <div>
          <v-input
            type="textarea"
            placeholder="Type your facebookLink here"
            v-model="profile.facebookLink"
          />
        </div>
        <p>Twitter link</p>
        <div>
          <v-input
            type="textarea"
            placeholder="Type your twitterLink here"
            v-model="profile.twitterLink"
          />
        </div>
        <p>Github link</p>
        <div>
          <v-input
            type="textarea"
            placeholder="Type your githubLink here"
            v-model="profile.githubLink"
          />
        </div>
        <p>Instagram link</p>
        <div>
          <v-input
            type="textarea"
            placeholder="Type your instagramLink here"
            v-model="profile.instagramLink"
          />
        </div>
        <p>Youtube link</p>
        <div>
          <v-input
            type="textarea"
            placeholder="Type your youtubeLink here"
            v-model="profile.youtubeLink"
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

  async created() {}

  private createProfile() {
    this.profile.ownerId = this.$auth.user.sub;
    this.profile.imageUrl = this.$auth.user.picture;
    this.$store.dispatch("profile/createProfile", this.profile);
    this.$router.push('home')
  }
}
</script>