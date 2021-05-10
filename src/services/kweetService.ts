import AxiosRequestHandler from '@/utils/AxiosRequestHandler';

class KweetService{
    public static getAllKweets(token: string, pagen: number): any{
        return AxiosRequestHandler.get(`api/kweet/kweets/${pagen}`, token);
    }

    public static GetKweetById(token: string, Id:string): any{
        return AxiosRequestHandler.get(`api/kweet/${Id}`, token);
    }

    // public static createKweet(token: string, kweet: object){
    //     return AxiosRequestHandler.post(':3123/api/kweet', kweet, token);
    // }
}

export default KweetService;