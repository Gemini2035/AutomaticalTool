import { CustomError, CommerceDataInCode } from "../types";
import { dataTransformer } from "./dataTransformer";
import XLSX from "xlsx";
import fs from "fs";
import path from "path";
import { timeFormater } from "./timeFormater";

type ExcelOutput = (input: CommerceDataInCode[]) => void;

export const excelOutput: ExcelOutput = (input) => {
  // TODO: 鲁棒性拓展
  const excelBuffer = dataTransformer(input);
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(excelBuffer);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  const fileName = timeFormater(new Date());
  const outputPath = path.join("output", fileName + ".xlsx");

  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  XLSX.writeFile(workbook, outputPath);
};