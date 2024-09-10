import { CommerceDataInCode, FileUrl } from "@/excelAbout/types";
import XLSX from "xlsx"

type ExcelOriginDataItem = Record<string, string>

export type ExcelSheetItem = { sheetName: string, data: CommerceDataInCode[] }

type ReadExcel = (fileUrl: FileUrl) => ExcelSheetItem[]

/* 
output example: 
{
    sheetName: 'test',
    data: [
        [{keyName: 'data0key0', keyValue: 'data0keyValue0'}, {keyName: 'data0key1', keyValue: 'data0keyValue1'}],
        [{keyName: 'data0key1', keyValue: 'data0keyValue1'}]
    ]
}
*/

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