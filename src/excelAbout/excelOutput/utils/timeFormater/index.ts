import dayjs, { ConfigType } from "dayjs"

export type TimeFormaterType = (input: ConfigType) => string
export const timeFormater: TimeFormaterType = (input) => dayjs(input).format('HH_mm_ss-YYYY.MM.DD')
