import { exec } from "child_process";

type ExecFunc = (command: string) => Promise<string>

export const execFunc: ExecFunc = async (command) => {
    try {
        const result = await new Promise<string>((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) reject('Error finding Chrome location');
                else resolve(stdout.trim());
            });
        })
        return result
    } catch {
        // TODO: 鲁棒性拓展
        return 'error'
    }
}