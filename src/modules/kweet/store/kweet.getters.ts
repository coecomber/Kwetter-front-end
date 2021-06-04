import { RootState } from '@/store/store.state';
import { GetterTree } from 'vuex';
import { KweetState } from '@/modules/kweet/kweet.types';

export const getters: GetterTree<KweetState, RootState> = {
  getKweet: (state: KweetState) => {
    return state.kweet;
  },
  getKweets: (state: KweetState) => {
    return state.kweets;
  },
};
