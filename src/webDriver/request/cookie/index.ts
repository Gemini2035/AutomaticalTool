// import { httpRequest } from "@/hooks";

export type GetCookie = () => Promise<string>;

export const getCookie: GetCookie = async () =>
  'qcc_did=97e7e46f-3f60-4af3-b051-066a53c12785; UM_distinctid=191b05ff4a2207a-01caba78819da5-26001e51-232800-191b05ff4a31f0d; QCCSESSID=631e138b6043b0e96c8db92817; acw_tc=0a472f4a17255290022104521e00d15b8517969d5e6a94a7a3e36173f3e7d8; CNZZDATA1254842228=1229229532-1725240964-https%253A%252F%252Fwww.google.com%252F%7C1725529020; tfstk=fL1qtRNCiSF2ZtFs1ERwzzjyD0Av9IqQ_1t6SNbMlnxmGjiGUNsOGdqvG1SP-Mz91I1b_ORANtG6codNSMOaAkNQOZQvpCqQA6AXWGOMS5tgjzEScCdgAu9Vt9UJ6Mg8GWfcrz865hxGjdmuZ3LKjCxDI0Dk-3AMjGvmZYY9ujcMIFxuzFKkjCAiwKQGub8Bnyz4ARE3nd92xayKsf7IOK-hH3lgx_84sHbD4fcwD0AU9a7b0XQWM6seRiNogM7GJOvP_0qeX_7liOb-0lYRIiOkcB2mzI1Ao9vGtlHGYISwKsvrSP7fonRyr64sp31ycGf2EyGeCQfBKIX7eo96geSGMiuZsMb5RspR_kokXtTpZF5T-A-wIg--XUc1X1BqjAJDyU-QzzPuwkgns1NAnAH9E7LyArTjBApDyU-QzzktBL4JzHaXl'