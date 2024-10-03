import { CommerceDataInCode, SysFileUrl, ExcelSheetItem } from "@/copilot"

export { CustomError } from "@/errorHandle"
export type { CommerceDataInCode, SysFileUrl, ExcelSheetItem }
// TODO: 细化约束类型
export type ExcelBufferItem = string[]
export type CommerceKeys = (keyof CommerceDataInCode)[]
export type ExcelSheetItemWithKeys = ExcelSheetItem & { commerceKeys: CommerceKeys }

