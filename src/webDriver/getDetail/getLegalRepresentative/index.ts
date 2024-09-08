import { httpRequest } from "../httpsRequest"
import Fuse from 'fuse.js'

export type GetLegalRepresentative = (name: string) => Promise<string | undefined>

export const getLegalRepresentative: GetLegalRepresentative = async (name) => {
    const response = await httpRequest<{ list: { OperName: string, Name: string, name: string }[] }>({
        url: `/api/search/searchMind?mindKeyWords=true&mindType=9&pageSize=5&person=true&searchKey=${encodeURI(
            name
        )}&suggest=true`
    });
    // TODO: 增加鲁棒性
    if (!response) return
    const { list = [] } = response
    const fuseInstance = new Fuse(list, {
        keys: ['name', 'Name']
    })
    return fuseInstance.search(name)?.shift()?.item?.OperName
}