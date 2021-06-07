import { RootState } from '@/store/store.state';
import { ActionTree } from 'vuex';
import { FollowService } from '@/modules/follow/follow.service';
import { FollowState } from '@/modules/follow/follow.types';
import { CreateFollowRequest } from '@/modules/follow/dto/request/create-follow.request';
import { CreateFollowResponse } from '@/modules/follow/dto/response/create-follow.response';

export const actions: ActionTree<FollowState, RootState> = {
    createFollow({ commit }: any, follow: CreateFollowRequest) {
        FollowService.createFollow(follow)
            .then((res: CreateFollowResponse) => {
                commit('CREATE_FOLLOW', follow);
            })
            .catch((err: any) => {
                console.log(err);
            });
    },
    getFollow({ commit }: any) {
        FollowService.getFollow()
          .then( response => {
            commit('GET_FOLLOW', response);
          })
          .catch((err: any) => {
            console.log(err);
          });
      },
};
