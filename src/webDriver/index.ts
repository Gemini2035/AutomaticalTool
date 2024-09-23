import { CommerceDataInCode } from "./types";
import { getDetail } from "./getDetail";
import { getDataKey } from "./getDataKey";
import { innerRandomSeed, setDelay } from "@/setDelay";

export type WebDriver = (commerceInfo: CommerceDataInCode[]) => Promise<{
  commerceKeys: (keyof CommerceDataInCode)[]
  data: CommerceDataInCode[]
}>;

export const webDriver: WebDriver = async (commerceInfo) => {
  // TODO: 鲁棒性拓展

  const commerceInfoKeys = Object.keys(commerceInfo[0])
  const { nameKey, phoneKey, partnerKey, allkeys } = getDataKey(commerceInfoKeys)
  const failNameList = [];
  const data = [];

  for (const commerceItem of commerceInfo) {
    if (!!commerceItem[phoneKey] && commerceItem[phoneKey] !== '座机' && commerceItem[partnerKey]) {
      data.push(commerceItem)
      continue
    }

    const { partnerName, phone } = await getDetail(commerceItem[nameKey]);
    console.log(partnerName, phone)
    
    const delayTime = innerRandomSeed(25000, 35000)
    await setDelay({
      msg: {
        startMsg: `${commerceItem[nameKey]}信息获取完成, 正在冷却 ${delayTime}ms...`,
        endMsg: `冷却完成, 准备获取下一条信息`
      }
    }, delayTime)

    data.push({
      ...commerceItem,
      [phoneKey]: phone,
      [partnerName]: partnerName
    })
  }

  return {
    commerceKeys: allkeys,
    data,
    // data: []
  }
};