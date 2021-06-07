import AxiosRequestHandler from '@/utils/AxiosRequestHandler';
import { AxiosResponse } from 'axios';
import { CreateFollowRequest } from '@/modules/follow/dto/request/create-follow.request';
import { CreateFollowResponse } from '@/modules/follow/dto/response/create-follow.response';
import { RemoveFollowRequest } from '@/modules/follow/dto/request/remove-follow.request';
import { RemoveFollowResponse } from '@/modules/follow/dto/response/remove-follow.response';

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

    public static removeFollow(
        removeFollow: RemoveFollowRequest
    ): Promise<RemoveFollowResponse> {
        return AxiosRequestHandler.delete<
            RemoveFollowRequest
        >('/follow', removeFollow)
            .then((res: AxiosResponse<RemoveFollowResponse>) => {
                return res;
            })
            .catch((err: any) => {
                console.error(err);
                throw err;
            });
    }

    public static getFollow(): any {
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
