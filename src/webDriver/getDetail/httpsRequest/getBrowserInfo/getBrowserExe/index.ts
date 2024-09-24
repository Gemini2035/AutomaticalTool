import { exec } from 'child_process';
import * as os from 'os';
import { execFunc } from './ExecFunc';
import { join } from 'path';

type PlatformType = 'win' | 'mac' | 'linux'

const OSINFODIC: Readonly<Record<string, PlatformType>> = {
    win32: 'win',
    win64: 'win',
    darwin: 'mac',
    linux: 'linux'
}

type GetBrowserExe = () => Promise<string>

export const getBrowserExe: GetBrowserExe = async () => {
    switch (OSINFODIC[os.platform()]) {
        case 'win':
            return await execFunc('where chrome')
        case 'mac':
            return join(await execFunc('mdfind "kMDItemCFBundleIdentifier == com.google.Chrome"'), 'Contents/MacOS/Google Chrome')
        case 'linux':
            return await execFunc('which google-chrome || which chrome')
        default:
            return 'error'
    }
};