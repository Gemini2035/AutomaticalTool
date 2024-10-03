import { readFirstFileInDir } from "@/fileHandle/readFirstFileInDir"
import { ExcelSheetItem } from "../types"
import { readExcel } from "./readExcel"
import { extname } from "path"

type ExcelInput = () => Promise<ExcelSheetItem[]>

export const excelInput: ExcelInput = async () => {
    const fileName = await readFirstFileInDir('input', (files) => files.filter(file => {
        const ext = extname(file).toLowerCase();
        return ext === '.xlsx' || ext === '.xls';
    }), true)
    const excelData = readExcel(fileName)
    return excelData
}