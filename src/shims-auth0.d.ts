import { VueAuth } from './modules/auth/VueAuth'
declare module 'vue/types/vue' {
  interface Vue {
    $auth: VueAuth
  }
}