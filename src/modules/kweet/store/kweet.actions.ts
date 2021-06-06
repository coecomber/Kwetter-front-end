import { RootState } from '@/store/store.state';
import { ActionTree } from 'vuex';
import { KweetService } from '@/modules/kweet/kweet.service';
import { KweetState } from '@/modules/kweet/kweet.types';
import { CreateKweetRequest } from '@/modules/kweet/dto/request/create-kweet.request';
import { CreateKweetResponse } from '@/modules/kweet/dto/response/create-kweet.response';

export const actions: ActionTree<KweetState, RootState> = {
    createKweet({ commit }: any, kweet: CreateKweetRequest) {
        KweetService.createKweet(kweet)
            .then((res: CreateKweetResponse) => {
                commit('CREATE_KWEET', kweet);
            })
            .catch((err: any) => {
                console.log(err);
            });
    },
    async getKweets({ commit }: any) {
        return KweetService.getKweets()
            .then((res: any) => {
                commit('GET_KWEETS');
                return res;
            })
            .catch((err: any) => {
                throw err;
            }
            )
    },
    async getKweetsByPageNumber({ commit }: any) {
        return KweetService.getKweetsByPageNumber()
            .then((res: any) => {
                commit('GET_10_KWEETS');
                return res;
            })
            .catch((err: any) => {
                throw err;
            }
            )
    },
    async getKweet({ commit }: any, uuid: string) {
        return KweetService.getKweet(uuid)
          .then((res: any) => {
            commit('GET_KWEET', res);
            return res;
          })
          .catch((err: any) => {
            throw err;
          });
      },
};
