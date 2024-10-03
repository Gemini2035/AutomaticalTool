import { CommerceDataInCode, SysFileUrl } from "@/copilot"

export { CustomError } from "@/errorHandle"
export type { CommerceDataInCode, SysFileUrl }
// TODO: 细化约束类型
export type ExcelBufferItem = string[]
export type ExcelSheetItem = { sheetName: string, data: CommerceDataInCode[] }
export type CommerceKeys = (keyof CommerceDataInCode)[]
export type ExcelSheetItemWithKeys = ExcelSheetItem & { commerceKeys: CommerceKeys }

