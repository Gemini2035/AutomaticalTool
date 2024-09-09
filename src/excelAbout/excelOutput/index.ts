import { CustomError, FileDataCopilot } from "./types";
import { dataTransformer } from "./utils";
import { utils, writeFile } from "xlsx";
import fs from "fs";
import path from "path";
import { timeFormater } from "./utils/timeFormater";

export type ExcelOutput = (input: FileDataCopilot[]) => boolean;

export const excelOutput: ExcelOutput = (input) => {
  const excelBuffer = dataTransformer(input);
  try {
    const workbook = utils.book_new();
    const worksheet = utils.aoa_to_sheet(excelBuffer);
    utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const fileName = timeFormater(new Date());
    const outputPath = path.join("output", fileName + ".xlsx");

    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    writeFile(workbook, outputPath);

    return true;
  } catch {
    throw new CustomError("尝试导出Excel文件时出错!");
  }
};