import { RootState } from '@/store/store.state';
import { GetterTree } from 'vuex';
import { FollowState } from '@/modules/follow/follow.types';

export const getters: GetterTree<FollowState, RootState> = {
  getFollow: (state: FollowState) => {
    return state.follow;
  },
  getProfiles: (state: FollowState) => {
    return state.follow;
  },
};
