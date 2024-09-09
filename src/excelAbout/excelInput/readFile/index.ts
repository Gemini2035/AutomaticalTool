import { ExcelOriginDataItem, FileUrl } from "@/excelAbout/types";
import XLSX from "xlsx"

type ReadExcel = (fileUrl: FileUrl) => ExcelOriginDataItem[]


export const readExcel: ReadExcel = (fileUrl) => {
    // TODO: 鲁棒性拓展
    console.log(fileUrl)
    const workbook = XLSX.readFile(fileUrl);
    const sheetNames = workbook.SheetNames;
    const sheet = workbook.Sheets[sheetNames[0]];
    const data = XLSX.utils.sheet_to_json<ExcelOriginDataItem>(sheet);
    console.log(data)
    return data
}