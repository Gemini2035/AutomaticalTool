import { httpRequest } from "../httpsRequest";

export type PhoneType = string

type GetPhone = (keyNo: string) => Promise<PhoneType>

const DEFAULT_PHONE: PhoneType = '座机号码'

enum PhoneStatus {
    success = '正常',
    error = '未知'
}

export const getPhone: GetPhone = async (keyNo) => {
    const { HisTelList = [], VTList = [] } = await httpRequest<{ HisTelList: { Tel: PhoneType, Status: '1' | '2' | '3' }[], VTList?: { k: PhoneType, d: PhoneStatus }[] }>({
        url: '/api/customDetail/getPhone',
        data: {
            keyNo,
            from: 'search'
        },
        method: 'Post'
    }) || {}

    // TODO: 鲁棒性拓展

    if (HisTelList.length) {
        return HisTelList.filter(({ Tel, Status }) => {
            if (Status !== '1') return false
            return !!VTList.find(({ k, d }) => k === Tel && d === PhoneStatus.success)
        }).shift()?.Tel || DEFAULT_PHONE
    } else {
        return VTList.find(({ d }) => d === PhoneStatus.success)?.k || DEFAULT_PHONE
    }


}