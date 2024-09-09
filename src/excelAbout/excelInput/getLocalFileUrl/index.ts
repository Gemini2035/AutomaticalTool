import { FileUrl } from "@/excelAbout/types";
import { promises } from "fs";
import { join, extname } from "path";

type GetLocalFileUrl = () => Promise<FileUrl>

export const getLocalFileUrl: GetLocalFileUrl = async () => {

    try {
        const inputDir = join(process.cwd(), 'input')
        const files = await promises.readdir(inputDir)
        const excelFiles = files.filter(file => {
            const ext = extname(file).toLowerCase();
            return ext === '.xlsx' || ext === '.xls';
        });
        return excelFiles.shift() || ''
    } catch (e) {
        // TODO: 鲁棒性拓展
        return ''
    }
}