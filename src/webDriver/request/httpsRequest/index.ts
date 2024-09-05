import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpRequestOptions } from "./types";
import { getCookie } from "../cookie";
import { headerGenerator } from "./headerGenerator";

const basicRequest = axios.create({
  baseURL: "https://www.qcc.com",
  method: "get",
  headers: {
    accept: "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9",
    priority: "u=1, i",
    referer: "https://www.qcc.com/",
    "sec-ch-ua": `"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"`,
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest",
  },
});

export const httpRequest = async <T>(
  { url, data, ...restAxisoRequestConfig }: AxiosRequestConfig<T>,
  {
    outputData = "data",
    headerGeneratorForbidden = false,
    randomHoldForbidden = false,
  }: HttpRequestOptions = {}
): Promise<T | undefined> => {
  try {
    if (!basicRequest.defaults?.headers?.["cookie"]) {
      basicRequest.defaults.headers["cookie"] = await getCookie();
    }
    const headers = headerGeneratorForbidden
      ? {}
      : await headerGenerator(url, data);

    const requestResponse = await basicRequest<T>({
      headers,
      ...{
        url,
        data,
        ...restAxisoRequestConfig,
      },
    });

    if (!randomHoldForbidden) setTimeout(() => {}, 1000);

    return requestResponse[outputData];
  } catch (e) {
    console.log(e);
  }
};
