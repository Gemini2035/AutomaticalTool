import { CommerceDataInCode } from "@/copilot"

export { CustomError } from "@/errorHandle"
export type { CommerceDataInCode }
// TODO: 细化约束类型
export type ExcelBufferItem = string[]
export type FileUrl = string
export type ExcelSheetItem = { sheetName: string, data: CommerceDataInCode[] }
export type CommerceKeys = (keyof CommerceDataInCode)[]
