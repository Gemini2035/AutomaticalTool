import { BreakPoint, SysFileUrl } from "../types"
import fs from 'fs';
import path from 'path';
import { BREAK_POINT_DIR } from '../constant';
import { writeFile } from "@/fileHandle";

type StoreBreakPoint = (breakInfo: {
    meta: {
        msg: string,
        code: number,
    }
    remainData: BreakPoint['remainData'],
    dataTotal: number,
    prevExcelFile: SysFileUrl 
}) => void

export const storeBreakPoint: StoreBreakPoint = ({ meta, remainData, dataTotal, prevExcelFile }) => {
    const fileName = 'breakPoint@' + new Date().getTime() + '.json'

    const breakPoint: BreakPoint = {
        name: fileName,
        pauseTime: new Date().toUTCString(),
        remainData,
        dataTotal,
        prevExcelFile,
    }
    // TODO: expand electron
    console.log(meta)

    // TODO: 鲁棒性拓展
    // TODO: 加密
    const outputPath = path.join(BREAK_POINT_DIR, fileName)
    writeFile(
        outputPath,
        () => fs.writeFile(outputPath, JSON.stringify(breakPoint), (e) => {
            if (!e) console.log('success')
        })
    )
}