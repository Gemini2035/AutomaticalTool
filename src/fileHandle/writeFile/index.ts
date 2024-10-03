import path from "path";
import fs from 'fs'

type WriteFile = (fileName: string, executeFunc: () => void) => void

export const writeFile: WriteFile = (fileName, executeFunc) => {
    const dir = path.dirname(fileName);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    executeFunc();
}