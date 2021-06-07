import { RootState } from '@/store/store.state';
import { Module } from 'vuex';
import { FollowState } from '@/modules/follow/follow.types';
import { actions } from './follow.actions';
import { getters } from './follow.getters';
import { mutations } from './follow.mutations';

export const state: FollowState = {
  follow: null,
  follows: null
};

export const FollowStore: Module<FollowState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
