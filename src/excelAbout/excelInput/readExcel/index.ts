import { CommerceDataInCode, FileUrl } from "@/excelAbout/types";
import XLSX from "xlsx"

type ExcelOriginDataItem = Record<string, string>

export type ExcelSheetItem = { sheetName: string, data: CommerceDataInCode[] }

type ReadExcel = (fileUrl: FileUrl) => ExcelSheetItem[]

export const readExcel: ReadExcel = (fileUrl) => {
    // TODO: 鲁棒性拓展
    const workbook = XLSX.readFile(fileUrl);
    const sheetNames = workbook.SheetNames;
    const result = sheetNames.map(sheetName => ({
        sheetName,
        data: XLSX.utils.sheet_to_json<ExcelOriginDataItem>(workbook.Sheets[sheetName])
    })
    )
    return result
}