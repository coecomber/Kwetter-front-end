import { RootState } from '@/store/store.state';
import { Module } from 'vuex';
import { ProfileState } from '@/modules/profile/profile.types';
import { actions } from './profile.actions';
import { getters } from './profile.getters';
import { mutations } from './profile.mutations';

export const state: ProfileState = {
  profile: null,
  profiles: null
};

export const ProfileStore: Module<ProfileState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
