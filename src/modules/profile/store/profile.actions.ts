import { RootState } from '@/store/store.state';
import { ActionTree } from 'vuex';
import { ProfileService } from '@/modules/profile/profile.service';
import { ProfileState } from '@/modules/profile/profile.types';
import { CreateProfileRequest } from '@/modules/profile/dto/request/create-profile.request';
import { CreateProfileResponse } from '@/modules/profile/dto/response/create-profile.response';

export const actions: ActionTree<ProfileState, RootState> = {
    createProfile({ commit }: any, profile: CreateProfileRequest) {
        ProfileService.createProfile(profile)
            .then((res: CreateProfileResponse) => {
                commit('CREATE_PROFILE', profile);
            })
            .catch((err: any) => {
                console.log(err);
            });
    },
    async getProfiles({ commit }: any) {
        return ProfileService.getProfiles()
            .then((res: any) => {
                commit('GET_PROFILES', res);
                return res;
            })
            .catch((err: any) => {
                throw err;
            }
            )
    },
    setProfile({ commit }: any, id: string) {
        ProfileService.getProfileById(id)
          .then( response => {
            commit('SET_PROFILE', response);
          })
          .catch((err: any) => {
            console.log(err);
          });
      },
};
