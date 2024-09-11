import { ExcelBufferItem, CommerceDataInCode, CommerceKeys } from "../../types";

type DataTransformerType = (input: CommerceDataInCode[], commerceKeys: CommerceKeys) => ExcelBufferItem[];

export const dataTransformer: DataTransformerType = (input, commerceKeys) =>
  input.map((dataItem) => commerceKeys.map((keyItem) => dataItem?.[keyItem] || ''));
