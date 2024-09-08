import { createHmac } from "crypto";
import { seedGenerator } from "./seed";
import { DataObject } from "./type";

export type ValueGenerator = (
  url: string,
  tid: string,
  data?: DataObject,
) => string;

export const valueGenerator: ValueGenerator = (
  url = "",
  tid = "",
  data = {}
) => {
  url = url.toLowerCase();
  const dataJson = JSON.stringify(data).toLowerCase();

  const payload = url + "pathString" + dataJson + tid;
  const key = seedGenerator(url);

  const hash = createHmac("sha512", key).update(payload).digest("hex");

  return hash.toLowerCase();
};
