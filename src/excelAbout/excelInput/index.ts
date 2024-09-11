import { ExcelSheetItem } from "../types"
import { getLocalFileUrl } from "./getLocalFileUrl"
import { readExcel } from "./readExcel"

type ExcelInput = () => Promise<ExcelSheetItem[]>

export const excelInput: ExcelInput = async () => {
    const fileName = await getLocalFileUrl()
    const excelData = readExcel(fileName)
    return excelData
}