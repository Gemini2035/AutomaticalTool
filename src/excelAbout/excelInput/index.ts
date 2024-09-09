import { CommerceNames } from "../types"
import { getLocalFileUrl } from "./getLocalFileUrl"

type ExcelInput = () => CommerceNames

export const excelInput: ExcelInput = () => {
    console.log(getLocalFileUrl())

    return ['百度']
}