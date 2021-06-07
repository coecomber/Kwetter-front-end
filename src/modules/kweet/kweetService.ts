import AxiosRequestHandler from '@/utils/AxiosRequestHandler';

class KweetService{
    public static getAllKweetsByPageNumber(token: string, pagen: number): any{
        return AxiosRequestHandler.get(`kweet/kweets/${pagen}`);
    }

    public static getAllKweetsByOwnerIdAndPageNumber(token: string, ownerId: string, pagen: number): any{
        return AxiosRequestHandler.get(`kweet/kweetsByOwnerId/${ownerId}/${pagen}`);
    }

    public static getAllKweets(token: string): any{
        return AxiosRequestHandler.get(`kweet/kweets`);
    }

    public static GetKweetById(token: string, Id:string): any{
        return AxiosRequestHandler.get(`kweet/${Id}`);
    }
}

export default KweetService;