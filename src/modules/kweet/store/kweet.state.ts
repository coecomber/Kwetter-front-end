import { RootState } from '@/store/store.state';
import { Module } from 'vuex';
import { KweetState } from '@/modules/kweet/kweet.types';
import { actions } from './kweet.actions';
import { getters } from './kweet.getters';
import { mutations } from './kweet.mutations';

export const state: KweetState = {
  kweet: null,
  kweets: null
};

export const KweetStore: Module<KweetState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
