import AxiosRequestHandler from '@/utils/AxiosRequestHandler';

class FollowService{
    public static getAllFollows(token: string): any{
        return AxiosRequestHandler.get(`follow`);
    }

    public static getAllFollowsPaged(token: string, ownerId: string): any{
        return AxiosRequestHandler.get(`follow/getFollowing/${ownerId}`);
    }

    public static checkIfFollowing(token: string, ownerId: string, followingOwnerId: string): any{
        return AxiosRequestHandler.get(`follow/checkIfFollowing/${ownerId}/${followingOwnerId}`);
    }
}

export default FollowService;