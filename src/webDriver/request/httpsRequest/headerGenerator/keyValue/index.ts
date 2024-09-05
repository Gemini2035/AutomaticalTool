import { keyGenerator } from "./key";
import { valueGenerator } from "./value";
import { DataObject } from "./type";

export type KeyValueGenerator = (
  reqUrl: string,
  tid: string,
  data?: DataObject
) => Record<string, string>;

export const keyValueGenerator: KeyValueGenerator = (
  reqUrl = "/",
  tid = "",
  data = {}
) => ({ [keyGenerator(reqUrl, data)]: valueGenerator(reqUrl, tid, data) });

export * from './type'
