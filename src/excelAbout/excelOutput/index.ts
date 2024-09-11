import { ExcelSheetItem, CommerceKeys } from "../types";
import { dataTransformer } from "./dataTransformer";
import XLSX from "xlsx";
import fs from "fs";
import path from "path";
import { timeFormater } from "./timeFormater";

type ExcelOutputItem = ExcelSheetItem & { commerceKeys: CommerceKeys }

type ExcelOutput = (input: ExcelOutputItem[]) => void;

export const excelOutput: ExcelOutput = (input) => {
  // TODO: 鲁棒性拓展
  const workbook = XLSX.utils.book_new();
  input.forEach(({ sheetName, commerceKeys, data }, index) => {
    const excelBuffer = [commerceKeys, ...dataTransformer(data, commerceKeys)];
    const worksheet = XLSX.utils.aoa_to_sheet(excelBuffer);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName || `Sheet${index}`);
  })
  const fileName = timeFormater(new Date());
  const outputPath = path.join("output", fileName + ".xlsx");

  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  XLSX.writeFile(workbook, outputPath);
};