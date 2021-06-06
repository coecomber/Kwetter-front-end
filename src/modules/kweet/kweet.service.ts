import AxiosRequestHandler from '@/utils/AxiosRequestHandler';
import { AxiosResponse } from 'axios';
import { CreateKweetRequest } from '@/modules/kweet/dto/request/create-kweet.request';
import { CreateKweetResponse } from '@/modules/kweet/dto/response/create-kweet.response';

export class KweetService {
  public static async createKweet(
    createKweet: CreateKweetRequest
  ): Promise<CreateKweetResponse> {
    return AxiosRequestHandler.post<
      CreateKweetRequest,
      CreateKweetResponse
    >('/kweet', createKweet)
      .then((res: AxiosResponse<CreateKweetResponse>) => {
        return res.data;
      })
      .catch((err: any) => {
        throw err;
      });
  }

  public static getKweets(): any {
    const url: string = `/kweet/tenKweets`;
    return AxiosRequestHandler.get(url)
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: any) => {
        console.error(err);
        throw err;
      });
  }

  public static getKweetsByPageNumber(): any {
    //
  }

  public static getKweet(uuid: string): any {
    const url: string = `/kweet/getOne/${uuid}`;
    return AxiosRequestHandler.get(url)
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: any) => {
        throw err;
      });
  }
}
