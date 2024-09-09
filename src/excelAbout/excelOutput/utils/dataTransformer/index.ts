import { ExcelBufferItem, FileDataCopilot } from "../../types";

export type DataTransformerType = (input: FileDataCopilot[]) => ExcelBufferItem[];

export const dataTransformer: DataTransformerType = (input) =>
  input.map((item) => Object.values(item)) as ExcelBufferItem[];
