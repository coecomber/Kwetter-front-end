import Vue from 'vue'
import 'es6-promise/auto'
import App from './App.vue'
import store from './store'
import router from './router'
import { Auth0Plugin } from './modules/auth'
import { domain, clientId } from '../auth.config.json'
import '@/assets/styles/tailwind.css'; //tailwind

import VInput from '@/common/components/v-input.vue';
import VButton from '@/common/components/v-button.vue';

Vue.component('v-input', VInput)
Vue.component('v-button', VButton)


// Vue.use(Vuex);

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')