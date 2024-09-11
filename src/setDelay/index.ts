type CustomDelayOptions = Partial<{
    msg: Partial<{
        startMsg: string,
        endMsg: string,
    }>
    randomSeed: () => number,
    delayFun: Function
}>

type SetDelay = (options?: CustomDelayOptions, delayTime?: number,) => void

export const setDelay: SetDelay = ({ msg: {
    startMsg = '',
    endMsg = '',
} = {}, randomSeed, delayFun } = {}, delayTime) => {
    if (startMsg) console.log(startMsg),
        // 默认延时1-3s
        setTimeout(() => delayFun?.(), delayTime || randomSeed?.() || (Math.random() * 2001 + 1000))
    if (endMsg) console.log(endMsg)
}