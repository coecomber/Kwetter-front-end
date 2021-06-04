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
                console.log(
                    'Ik probeer een kweet te maken'
                );
                console.log(res);
                commit('CREATE_KWEET', kweet);
            })
            .catch((err: any) => {
                console.log(err);
            });
    },
    async getKweets({ commit }: any) {
        return KweetService.getKweets()
            .then((res: any) => {
                console.log(
                    'Ik probeer alle kweets op te halen'
                );
                commit('GET_KWEETS', res);
                console.log(res);
                return res;
            })
            .catch((err: any) => {
                throw err;
            }
            )
    },
};
