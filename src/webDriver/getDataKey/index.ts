import { CommerceDataInCode } from "../types";
import Fuse from "fuse.js";

type NecessaryKey = {
    nameKey: string,
    phoneKey: string,
    partnerKey: string
}

type GetDataKey = (dataKeys: (keyof CommerceDataInCode)[]) => NecessaryKey

const NAME_KEY = '企业名称'
const PHONE_KEY = '手机'
const PARTNER_KEY = '法定代表人'

export const getDataKey: GetDataKey = (dataKeys) => {
    const fuseInstance = new Fuse(dataKeys, { threshold: 0.1 })
    const nameKey = fuseInstance.search(NAME_KEY)?.shift()?.item
    if (!nameKey) throw Error
    const phoneKey = fuseInstance.search(PHONE_KEY)?.shift()?.item || PHONE_KEY
    const partnerKey = fuseInstance.search(PARTNER_KEY)?.shift()?.item || PARTNER_KEY
    return {
        nameKey,
        phoneKey,
        partnerKey
    }
}