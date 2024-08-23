import { httpRequest } from "@/hooks"

export const test = async() => {
    await httpRequest({
        url: 'https://www.baidu.com'
    })
}