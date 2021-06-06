import AxiosRequestHandler from '@/utils/AxiosRequestHandler';
import { AxiosResponse } from 'axios';
import { CreateProfileRequest } from '@/modules/profile/dto/request/create-profile.request';
import { CreateProfileResponse } from '@/modules/profile/dto/response/create-profile.response';

export class ProfileService {
  public static async createProfile(
    createProfile: CreateProfileRequest
  ): Promise<CreateProfileResponse> {
    return AxiosRequestHandler.post<
      CreateProfileRequest,
      CreateProfileResponse
    >('/profile', createProfile)
      .then((res: AxiosResponse<CreateProfileResponse>) => {
        return res.data;
      })
      .catch((err: any) => {
        throw err;
      });
  }

  public static getProfile(): any {
    const url: string = `profile`;
    return AxiosRequestHandler.get(url)
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: any) => {
        console.error(err);
        throw err;
      });
  }

  public static getProfiles(): any {
    const url: string = `profile/getAllProfiles`;
    return AxiosRequestHandler.get(url)
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: any) => {
        console.error(err);
        throw err;
      });
  }

  public static getProfileById(uuid: string): any {
    const url: string = `profile/getOneById/${uuid}`;
    return AxiosRequestHandler.get(url)
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: any) => {
        console.error(err);
        throw err;
      });
  }
}
