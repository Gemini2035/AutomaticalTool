import axios, { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { getCookie } from "./cookie";
import { headerGenerator } from "./headerGenerator";
import { setDelay } from "@/setDelay";

type HttpRequestOptions = Partial<{
  outputData: keyof AxiosResponse;
  headerGeneratorForbidden: boolean;
  needDelay: boolean;
  retryTime: number
}>;

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
      // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",    
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest",
  },
});

export const httpRequest = async <T>(
  { url, data, ...restAxisoRequestConfig }: AxiosRequestConfig,
  {
    outputData = "data",
    headerGeneratorForbidden = false,
    needDelay = false,
    retryTime = 3
  }: HttpRequestOptions = {}
): Promise<T | undefined> => {
  if (needDelay) await setDelay({
    msg: {
      startMsg: '为防止被反爬措施屏蔽, http请求正在冷却',
      endMsg: 'http请求冷却完成'
    }
  })

  for (let time = 0; time < retryTime; time++) {
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

      return requestResponse[outputData];
    } catch (requestError) {
      // TODO: 拆分错误处理逻辑
      console.log(url, '请求路径发生错误!')
      if (isAxiosError(requestError)) {
        // TODO: 409处理
        if (requestError?.response?.status) {
          console.log('网站请求错误: ', requestError?.response?.data)
          basicRequest.defaults.headers["cookie"] = await getCookie();
          await setDelay()
          console.log(`正在重试... 当前重试次数: ${time + 1}, 重试上限: ${retryTime}`)
          continue
        }
      }
      console.log('未知错误', requestError)
      return
    }
  }
};
