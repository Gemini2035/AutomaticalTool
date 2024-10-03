import { ExcelSheetItem, UTCTime } from "@/copilot"

export type BreakPoint = {
    pauseTime: UTCTime,
    remainData: ExcelSheetItem[]
}