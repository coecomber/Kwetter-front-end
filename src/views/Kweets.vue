<template>
  <div class="kweets" v-if="!$auth.loading">
    <Login msg="Kwetter." />

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <div v-if="$auth.isAuthenticated">
        <p>skrt DIT IS KWEETS PAGE YO</p>
      </div>
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
