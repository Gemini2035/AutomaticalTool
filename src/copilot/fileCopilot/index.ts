export type CommerceDataInCode = Record<string, string>
export type ExcelSheetItem = { sheetName: string, data: CommerceDataInCode[] }
export type CommerceKeys = (keyof CommerceDataInCode)[]
export type ExcelSheetItemWithKeys = ExcelSheetItem & { commerceKeys: CommerceKeys }