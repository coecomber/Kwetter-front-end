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
        console.log('hier komt een url');
        console.log(url);
        console.log('dit is het einde aan een url');
        return res;
      })
      .catch((err: any) => {
        console.error(err);
        throw err;
      });
  }
}
