import { MutationTree } from 'vuex';
import { CreateProfileRequest } from '@/modules/profile/dto/request/create-profile.request';
import { ProfileState } from '@/modules/profile/profile.types';

export const mutations: MutationTree<ProfileState> = {
  CREATE_PROFILE(state: ProfileState, profile: CreateProfileRequest) {
    state.profile = profile;
  },
  GET_PROFILE(state: ProfileState, profile: any) { //TODO Typeing
    state.profile = profile;
  },
  GET_PROFILES(state: ProfileState, profiles: any) { //TODO Typeing
    state.profiles = profiles;
  },
};
