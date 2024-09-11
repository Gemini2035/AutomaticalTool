import { CommerceDataInCode } from "../types";
import Fuse from "fuse.js";

enum NecessaryKeyDic {
    nameKey = '企业名称',
    partnerKey = '法定代表人',
    phoneKey = '手机'
}

type CommerceDataInCodeKey = keyof CommerceDataInCode
type NecessaryKey = Record<keyof typeof NecessaryKeyDic, CommerceDataInCodeKey>

type GetDataKey = (dataKeys: CommerceDataInCodeKey[]) => NecessaryKey & { allkeys: CommerceDataInCodeKey[] }

export const getDataKey: GetDataKey = (dataKeys) => {
    const fuseInstance = new Fuse(dataKeys, { threshold: 0.1 })
    const necessaryKeyInArray: CommerceDataInCodeKey[] = []
    const necessaryKey = Object.entries(NecessaryKeyDic).reduce((prev, [key, searchKey]) => {
        const keyResult = fuseInstance.search(searchKey)?.shift()?.item || searchKey
        necessaryKeyInArray.push(keyResult)
        return {
            ...prev,
            [key]: keyResult
        }
    }, {} as NecessaryKey)
    // 鲁棒性拓展
    if (!necessaryKey?.nameKey) throw Error;

    return {
       ...necessaryKey,
       allkeys: [...necessaryKeyInArray, ...dataKeys.filter((keyItem) => !necessaryKeyInArray.includes(keyItem))]
    }
}