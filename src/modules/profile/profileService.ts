import AxiosRequestHandler from '@/utils/AxiosRequestHandler';

class ProfileService{
    public static getAllProfiles(token: string): any{
        return AxiosRequestHandler.get(`profile/getAllProfiles`);
    }

    public static getAllProfilesPaged(token: string, pagen: number): any{
        return AxiosRequestHandler.get(`profile/profiles/${pagen}`);
    }

    public static GetProfileByName(token: string, name:string): any{
        return AxiosRequestHandler.get(`profile/getOne/${name}`);
    }

    public static GetCheckProfileByOwnerId(token: string, ownerId:string): any{
        return AxiosRequestHandler.get(`profile/check/${ownerId}`);
    }
}

export default ProfileService;