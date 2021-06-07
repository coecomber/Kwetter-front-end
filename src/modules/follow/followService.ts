import AxiosRequestHandler from '@/utils/AxiosRequestHandler';
import { AxiosResponse } from 'axios';
import { CreateFollowRequest } from '@/modules/follow/dto/request/create-follow.request';
import { CreateFollowResponse } from '@/modules/follow/dto/response/create-follow.response';

export class FollowService {
  public static async createFollow(
    createFollow: CreateFollowRequest
  ): Promise<CreateFollowResponse> {
    return AxiosRequestHandler.post<
      CreateFollowRequest,
      CreateFollowResponse
    >('/follow', createFollow)
      .then((res: AxiosResponse<CreateFollowResponse>) => {
        return res.data;
      })
      .catch((err: any) => {
        throw err;
      });
  }

  public static getFollowByOwnerId(ownerId: string): any {
    const url: string = `follow/getFollowing/${ownerId}`;
    return AxiosRequestHandler.get(url)
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: any) => {
        console.error(err);
        throw err;
      });
  }

  public static getFollows(): any {
    const url: string = `follow`;
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
