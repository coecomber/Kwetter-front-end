import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from "../views/Profile.vue";
import Kweets from "../views/Kweets.vue";
import Kweet from "../views/Kweet.vue";
import OtherProfile from "../views/OtherProfile.vue";
import CreateProfile from "../views/CreateProfile.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/profile/:name",
    name: "Profile",
    component: OtherProfile
  },
  {
    path: "/createProfile",
    name: "CreateProfile",
    component: CreateProfile
  },
  {
    path: "/kweet",
    name: "Kweets",
    component: Kweets
  },
  {
    path: "/kweet/:id",
    name: "Kweet",
    component: Kweet
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
