import { RootState } from '@/store/store.state';
import { GetterTree } from 'vuex';
import { ProfileState } from '@/modules/profile/profile.types';

export const getters: GetterTree<ProfileState, RootState> = {
  getProfile: (state: ProfileState) => {
    return state.profile;
  },
  getProfiles: (state: ProfileState) => {
    return state.profiles;
  },
};
