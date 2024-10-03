import { readFirstFileInDir } from "@/fileHandle/readFirstFileInDir";
import { BreakPoint } from "../types";
import fs from "fs";
import path from "path";

type RestoreBreakPoint = () => Promise<BreakPoint | false>;

export const restoreBreakPoint: RestoreBreakPoint = async () => {
    // TODO: 鲁棒性拓展
    const fileUrl = await readFirstFileInDir(path.join('var', 'json'))
    if (!fileUrl) return false;
    const data = fs.readFileSync(fileUrl, 'utf-8');
    return JSON.parse(data);
}