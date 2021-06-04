import AxiosRequestHandler from '@/utils/AxiosRequestHandler';

class KweetService{
    public static getAllKweets(token: string, pagen: number): any{
        return AxiosRequestHandler.get(`:3123/api/kweet/kweets/${pagen}`);
    }

    public static GetKweetById(token: string, Id:string): any{
        return AxiosRequestHandler.get(`:3123/api/kweet/${Id}`);
    }

    public static createKweet(token: string, kweet: object){
        return AxiosRequestHandler.post(':3123/api/kweet', kweet);
    }
}

export default KweetService;