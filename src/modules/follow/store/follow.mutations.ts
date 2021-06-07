import { MutationTree } from 'vuex';
import { CreateFollowRequest } from '@/modules/follow/dto/request/create-follow.request';
import { FollowState } from '@/modules/follow/follow.types';

export const mutations: MutationTree<FollowState> = {
  CREATE_FOLLOW(state: FollowState, follow: CreateFollowRequest) {
    state.follow = follow;
  },
  GET_PROFILE(state: FollowState, follow: any) {
    state.follow = follow;
  },
  SET_PROFILE(state: FollowState, follow: any) { 
    state.follow = follow;
  },
  GET_PROFILES(state: FollowState, follows: any) {
    state.follows = follows;
  },
};
