import { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { DataObject, keyValueGenerator } from "./keyValue";
import { idGenerator } from "./idGenerator";

export type HeaderGenerator = (
  reqUrl?: string,
  data?: DataObject
) => Promise<AxiosRequestConfig['headers']>;

export const headerGenerator: HeaderGenerator = async(
  reqUrl = '/',
  data
) => {
  const { pid, tid } = await idGenerator();

  return {
    ...keyValueGenerator(reqUrl, tid, data),
    'X-Pid': pid
  };
};
