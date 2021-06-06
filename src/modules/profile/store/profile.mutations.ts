import { MutationTree } from 'vuex';
import { CreateProfileRequest } from '@/modules/profile/dto/request/create-profile.request';
import { ProfileState } from '@/modules/profile/profile.types';

export const mutations: MutationTree<ProfileState> = {
  CREATE_PROFILE(state: ProfileState, profile: CreateProfileRequest) {
    state.profile = profile;
  },
  GET_PROFILE(state: ProfileState, profile: any) {
    state.profile = profile;
  },
  SET_PROFILE(state: ProfileState, profile: any) { 
    state.profile = profile;
  },
  GET_PROFILES(state: ProfileState, profiles: any) {
    state.profiles = profiles;
  },
};
