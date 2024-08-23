import axios, { AxiosRequestConfig } from "axios";

type HttpRequestType = <T = any>(input: AxiosRequestConfig) => Promise<T | undefined>

export const httpRequest: HttpRequestType = async <T>(input: AxiosRequestConfig) => {
    try {
        console.log('111')
        const requestResponse = await axios<T>({
            method: 'get',
            ...input
        })
        console.log(requestResponse)
        return requestResponse.data
    } catch(e) {
        console.log(e)
    }
}