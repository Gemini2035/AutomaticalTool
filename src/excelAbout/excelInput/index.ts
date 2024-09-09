import { CommerceNames } from "../types"
import { getLocalFileUrl } from "./getLocalFileUrl"
import { readExcel } from "./readFile"

type ExcelInput = () => Promise<CommerceNames>

export const excelInput: ExcelInput = async () => {
    const fileName = await getLocalFileUrl()
    console.log('111', fileName)
    const originData = readExcel(fileName)
    return ['百度']
}