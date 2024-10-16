import { ExcelSheetItemWithKeys, SysFileUrl } from "../types";
import { dataTransformer } from "./dataTransformer";
import XLSX from "xlsx";
import path from "path";
import { timeFormater } from "./timeFormater";
import { writeFile } from "@/fileHandle";


type ExcelOutput = (input: ExcelSheetItemWithKeys[], prevExcelFile?: SysFileUrl) => void;

export const excelOutput: ExcelOutput = (input, prevExcelFile) => {
  // TODO: 鲁棒性拓展
  // TODO: 添加断点恢复
  const workbook = XLSX.utils.book_new();
  input.forEach(({ sheetName, commerceKeys, data }, index) => {
    const excelBuffer = [commerceKeys, ...dataTransformer(data, commerceKeys)];
    const worksheet = XLSX.utils.aoa_to_sheet(excelBuffer);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName || `Sheet${index}`);
  })
  const fileName = timeFormater(new Date());
  const outputPath = path.join("output", fileName + ".xlsx");

  writeFile(outputPath, () => XLSX.writeFile(workbook, outputPath))
};