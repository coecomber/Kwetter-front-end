import AxiosRequestHandler from '@/utils/AxiosRequestHandler';

class KweetService{
    public static getAllKweets(token: string, pagen: number): any{
        return AxiosRequestHandler.get(`kweet/kweets/${pagen}`);
    }

    public static GetKweetById(token: string, Id:string): any{
        return AxiosRequestHandler.get(`kweet/${Id}`);
    }
}

export default KweetService;