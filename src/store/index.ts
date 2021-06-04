import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { RootState } from '@/store/store.state';
import { mutations } from '@/store/store.mutations';
import { actions } from '@/store/store.actions';
import { getters } from '@/store/store.getters';

import { KweetStore } from '@/modules/kweet/store/kweet.state';
import { ProfileStore } from '@/modules/profile/store/profile.state';

Vue.use(Vuex);

export const state: RootState = {
  sidebar: {
    contextMenu: {
      collapsed: true,
    },
  },
};

const store: StoreOptions<RootState> = {
  modules: {
    kweet: KweetStore,
    profile: ProfileStore,
  },
  state,
  mutations,
  actions,
  getters,
};

export default new Vuex.Store<RootState>(store);
