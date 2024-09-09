import { getCommerceInfo } from "./getCommerceInfo";
import { getPhone } from "./getPhone";

export type GetDetail = (
    name: string
) => Promise<{ partnerName: string, phone: string }>;

export const getDetail: GetDetail = async (name) => {

    const { KeyNo = '', OperName = '' } = await getCommerceInfo(name) || {}

    return {
        partnerName: OperName,
        phone: await getPhone(KeyNo)
    }
};