import { ExcelBufferItem, FileDataCopilot } from "../types";

type DataTransformerType = (input: FileDataCopilot[]) => ExcelBufferItem[];

export const dataTransformer: DataTransformerType = (input) =>
  input.map((item) => Object.values(item)) as ExcelBufferItem[];
