import { MutationTree } from 'vuex';
import { CreateKweetRequest } from '@/modules/kweet/dto/request/create-kweet.request';
import { KweetState } from '@/modules/kweet/kweet.types';

export const mutations: MutationTree<KweetState> = {
  CREATE_KWEET(state: KweetState, kweet: CreateKweetRequest) {
    state.kweet = kweet;
  },
  GET_KWEET(state: KweetState, kweet: any) {
    state.kweet = kweet;
  },
  GET_KWEETS(state: KweetState, kweets: any) {
    state.kweets = kweets;
  },
  GET_10_KWEETS(state: KweetState, kweets: any) {
    state.kweets = kweets;
  },
};
