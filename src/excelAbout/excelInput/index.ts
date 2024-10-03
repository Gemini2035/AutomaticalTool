import { readFirstFileInDir } from "@/fileHandle/readFirstFileInDir"
import { ExcelSheetItem } from "../types"
import { readExcel } from "./readExcel"

type ExcelInput = () => Promise<ExcelSheetItem[]>

export const excelInput: ExcelInput = async () => {
    const fileName = await readFirstFileInDir('input')
    const excelData = readExcel(fileName)
    return excelData
}