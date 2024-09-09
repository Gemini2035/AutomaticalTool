import { ExcelBufferItem, CommerceDataInCode } from "../../types";

type DataTransformerType = (input: CommerceDataInCode[]) => ExcelBufferItem[];

export const dataTransformer: DataTransformerType = (input) =>
  input.map((item) => Object.values(item)) as ExcelBufferItem[];
