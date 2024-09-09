import { httpRequest } from "../httpsRequest"
import Fuse from 'fuse.js'

type ConmmerceInfo = {
    OperName: string,
    KeyNo: string,
    name: string,
    Name: string
}

type GetCommerceInfo = (name: string) => Promise<ConmmerceInfo | undefined>

export const getCommerceInfo: GetCommerceInfo = async (name) => {
    const response = await httpRequest<{ list: ConmmerceInfo[] }>({
        url: `/api/search/searchMind?mindKeyWords=true&mindType=9&pageSize=5&person=true&searchKey=${encodeURI(
            name
        )}&suggest=true`
    });
    // TODO: 增加鲁棒性
    if (!response) return
    const { list = [] } = response
    const fuseInstance = new Fuse(list, {
        keys: [{ name: 'name', weight: 0.9 }, { name: 'Name', weight: 0.1 }]
    })
    return fuseInstance.search(name)?.shift()?.item
}