import { CustomError, FileDataCopilot } from "./types";
import { dataTransformer } from "./utils";
import { utils, writeFile } from "xlsx";
import fs from "fs";
import path from "path";

type WriteFileType = (input: FileDataCopilot[]) => boolean;

export const exportDataToExcel: WriteFileType = (input) => {
  const excelBuffer = dataTransformer(input);
  try {
    const workbook = utils.book_new();
    const worksheet = utils.aoa_to_sheet(excelBuffer);
    utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const name = new Date();
    const outputPath = path.join(__dirname, "output", name.toString(), ".xlsx");

    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    writeFile(workbook, name + ".xlsx");

    return true;
  } catch {
    throw new CustomError("尝试导出Excel文件时出错!");
  }
};
