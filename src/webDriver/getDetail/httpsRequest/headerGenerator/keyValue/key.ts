import { seedGenerator } from "./seed";
import {createHmac} from 'crypto'
import { DataObject } from "./type";

export type KeyGenerator = (
  url: string,
  data?: DataObject,
) => string;

export const keyGenerator: KeyGenerator = (url = '/', data = {}) => {
  url = url.toLowerCase();
  const dataJson = JSON.stringify(data).toLowerCase();

  const key = seedGenerator(url);
  const hash = createHmac('sha512', key)
      .update(url + dataJson)
      .digest('hex');

  return hash.toLowerCase().substring(8, 28);
}