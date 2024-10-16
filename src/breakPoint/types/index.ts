import { ExcelSheetItem, SysFileUrl, UTCTime } from "@/copilot"

export type BreakPoint = {
    name: string
    pauseTime: UTCTime,
    dataTotal: number,
    remainData: ExcelSheetItem[],
    prevExcelFile: SysFileUrl
}

export type { SysFileUrl }