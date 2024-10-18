import { SysFileUrl } from "@/fileHandle/types";
import { promises } from "fs";
import { join } from "path";

type ReadFirstFileInDir = (dirname: string, filterFunc?: (data: SysFileUrl[]) => SysFileUrl[], needConsoleLog?: boolean) => Promise<SysFileUrl>

export const readFirstFileInDir: ReadFirstFileInDir = async (
    dirname,
    filterFunc = (data) => data,
    needConsoleLog
) => {
    try {
        const inputDir = join(process.cwd(), dirname)
        const files = await promises.readdir(inputDir)
        const excelFiles = filterFunc(files)
        const fileName = excelFiles.pop()
        if (!fileName) return ''
        if (needConsoleLog) console.log(`已读取到 ${fileName} 文件`)
        return join(inputDir, fileName)
    } catch (error) {
        return ''
    }
}