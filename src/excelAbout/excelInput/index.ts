import { readFirstFileInDir } from "@/fileHandle/readFirstFileInDir"
import { ExcelSheetItem } from "../types"
import { readExcel } from "./readExcel"
import { extname } from "path"

type ExcelInput = (type: 'output' | 'input') => Promise<ExcelSheetItem[]>

export const excelInput: ExcelInput = async (type) => {
    const fileName = await readFirstFileInDir(type, (files) => files.filter(file => {
        const ext = extname(file).toLowerCase();
        return ext === '.xlsx' || ext === '.xls';
    }), true)
    if (!fileName) return []
    const excelData = readExcel(fileName)
    return excelData
}