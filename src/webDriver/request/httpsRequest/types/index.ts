import { AxiosResponse } from "axios";

export type HttpRequestOptions = Partial<{
  outputData: keyof AxiosResponse;
  headerGeneratorForbidden: boolean;
  randomHoldForbidden: boolean;
}>;
