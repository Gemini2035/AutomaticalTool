type InnerRandomSeed = (low: number, high: number) => number;

export const innerRandomSeed: InnerRandomSeed = (low, high) => (low + Math.floor(Math.random() * (high - low + 1)))

type CustomDelayOptions = Partial<{
    msg: Partial<{
        startMsg: string,
        endMsg: string,
    }>
    randomSeed: () => number,
    delayFun: Function
}>

type SetDelay = (options?: CustomDelayOptions, delayTime?: number,) => Promise<void>

export const setDelay: SetDelay = async ({ msg: {
    startMsg = '',
    endMsg = '',
} = {}, randomSeed, delayFun } = {}, delayTime) => {
    // 默认延时1-3s
    await new Promise<void>(resolve => {
        if (startMsg) console.log(startMsg)
        setTimeout(() => {
            delayFun?.()
            if (endMsg) console.log(endMsg)
            resolve()
        }, (delayTime === undefined ? undefined : delayTime) || randomSeed?.() || innerRandomSeed(1000, 3000))
    })
}
