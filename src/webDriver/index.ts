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
    data: commerceInfo.map(async (commerceItem) => {
      if (!!commerceItem[phoneKey] && commerceItem[phoneKey] !== '座机' && commerceItem[partnerKey]) return commerceItem
      const {partnerName, phone} = await getDetail(commerceItem[nameKey]);
      setDelay({
        msg: {
          startMsg: `${commerceItem[nameKey]}信息获取完成, 正在冷却...`,
          endMsg: `冷却完成, 准备获取下一条信息`
        }
      })

      return {
        ...commerceItem,
        [phoneKey]: phone,
        [partnerName]: partnerName
      }
    })
    // data: []
  }
};