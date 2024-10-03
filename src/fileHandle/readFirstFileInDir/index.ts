import { SysFileUrl } from "@/fileHandle/types";
import { promises } from "fs";
import { join, extname } from "path";

type ReadFirstFileInDir = (dirname: string, needConsoleLog?: boolean) => Promise<SysFileUrl>

export const readFirstFileInDir: ReadFirstFileInDir = async (dirname, needConsoleLog) => {
    const inputDir = join(process.cwd(), dirname)
    const files = await promises.readdir(inputDir)
    const excelFiles = files.filter(file => {
        const ext = extname(file).toLowerCase();
        return ext === '.xlsx' || ext === '.xls';
    });
    const fileName = excelFiles.pop()
    if (needConsoleLog) console.log(`已读取到 ${fileName} 文件`)
    return join(inputDir, fileName || '')
}