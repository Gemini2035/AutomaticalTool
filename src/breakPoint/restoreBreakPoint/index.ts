import { readFirstFileInDir } from "@/fileHandle/readFirstFileInDir";
import { BreakPoint } from "../types";
import fs from "fs";
import { BREAK_POINT_DIR } from "../constant";

type RestoreBreakPoint = () => Promise<BreakPoint | undefined>;

export const restoreBreakPoint: RestoreBreakPoint = async () => {
    // TODO: 鲁棒性拓展
    const fileUrl = await readFirstFileInDir(BREAK_POINT_DIR)
    if (!fileUrl) return;
    const data = fs.readFileSync(fileUrl, 'utf-8');
    return JSON.parse(data);
}