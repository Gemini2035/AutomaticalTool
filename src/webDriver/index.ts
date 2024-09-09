import { getDetail } from "./getDetail";

export type WebDriver = (names: string[]) => Promise<boolean>;

export const webDriver = async (names: string[]) => {
  // 鲁棒性拓展
  const failNameList = [];
  names.forEach(async (name) => {
    const result = await getDetail(name);
    if (!result) failNameList.push(name);
  });
};