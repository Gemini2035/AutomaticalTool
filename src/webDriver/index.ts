import { CommerceDataInCode } from "./types";
import { getDetail } from "./getDetail";
import { getDataKey } from "./getDataKey";

export type WebDriver = (commerceInfo: CommerceDataInCode[]) => Promise<{
  commerceKeys: (keyof CommerceDataInCode)[]
  data: Promise<CommerceDataInCode>[]
}>;

export const webDriver: WebDriver = async (commerceInfo) => {
  // TODO: 鲁棒性拓展

  const commerceInfoKeys = Object.keys(commerceInfo[0])
  const {nameKey, phoneKey, partnerKey, allkeys} = getDataKey(commerceInfoKeys)
  const failNameList = [];
  return {
    commerceKeys: allkeys,
    // data: commerceInfo.map(async (commerceItem) => {
    //   if (!!commerceItem[phoneKey] && commerceItem[phoneKey] !== '座机' && commerceItem[partnerKey]) return commerceItem
    //   const {partnerName, phone} = await getDetail(commerceItem[nameKey]);
    //   // TODO: 优化延时
    //   setTimeout(() => {}, 1000)
    //   return {
    //     ...commerceItem,
    //     [phoneKey]: phone,
    //     [partnerName]: partnerName
    //   }
    // })
    data: []
  }
};