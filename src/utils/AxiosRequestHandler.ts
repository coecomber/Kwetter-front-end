import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { StatusCodes } from "http-status-codes";
import BadRequestException from "./exceptions/badRequest.exception";
import HttpException from "./exceptions/httpException";
import InternalServerException from "./exceptions/internalServer.exception";

class AxiosRequestHandler {
    private static api = axios.create({
        baseURL: "http://api.localhost/"
    })

    public static get(url: string): any {
        return this.api
            .get(url, { headers: { } })
            .then((res: AxiosResponse) => {
                console.log('Trying to get')
                console.log(url)
                return res;
            })
            .catch((err: AxiosError) => {
                if (err.response) {
                    return err.response;
                }
            });
    }

    public static async post<TRequestBody, TResponseBody>(
        url: string,
        object: TRequestBody,
        config?: AxiosRequestConfig
      ): Promise<AxiosResponse<TResponseBody>> {
        return this.api
            .post(url, object)
            .then((res: AxiosResponse) => {
                return res;
            })
            .catch((err: AxiosError) => {
                console.log('Got an error from AxiosRequestHandler.ts.post();')
                throw this.checkStatusCode(err);
            });
    }

    public static delete(url: string, object: any): any {
        return this.api
            .delete(url, object)
            .then((res: AxiosResponse) => {
                return res;
            })
            .catch((err: AxiosError) => {
                throw this.checkStatusCode(err);
            });
    }

    public static put(url: string, object: any, token: string): any {
        return this.api
            .put(url, object, { headers: { Authorization: `Bearer ${token}` } })
            .then((res: AxiosResponse) => {
                return res;
            })
            .catch((err: AxiosError) => {
                throw this.checkStatusCode(err);
            });
    }

    public static patch(url: string, object: any, token: string): any {
        return this.api
            .patch(url, object, { headers: { Authorization: `Bearer ${token}` } })
            .then((res: AxiosResponse) => {
                return res;
            })
            .catch((err: AxiosError) => {
                throw this.checkStatusCode(err);
            });
    }

    private static checkStatusCode(err: AxiosError<any>): HttpException {
        const message: string = err.response.data.message;
        switch (err.response.status) {
            case StatusCodes.BAD_REQUEST:
                return new BadRequestException(message);
            case StatusCodes.INTERNAL_SERVER_ERROR:
                return new InternalServerException(message);
        }
    }
}

export default AxiosRequestHandler;