<template>
  <div class="home">
    <img alt="Kwetter logo" src="../assets/kwetter.png" />
    <Login msg="Kwetter." />

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue'; // @ is an alias to /src

@Component({
  components: {
    Login,
  },
})
export default class Home extends Vue {
  login () {
    this.$auth.loginWithRedirect({})
  }

  // Log the user out
  logout () {
    this.$auth.logout({
      returnTo: window.location.origin
    })
  }
}
</script>
