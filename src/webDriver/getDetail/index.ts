import { getLegalRepresentative } from "./getLegalRepresentative";

export type GetDetail = (
    name: string
) => Promise<boolean>;

export const getDetail: GetDetail = async (name) => {

    const partnerName = await getLegalRepresentative(name)

    console.log(partnerName)

    setTimeout(() => { }, 3000);
    return true;
};