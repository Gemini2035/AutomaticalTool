// import { httpRequest } from "@/hooks";

export type GetCookie = () => Promise<string>;

// TODO: cookie获取代码化

export const getCookie: GetCookie = async () =>
  'qcc_did=a7a3c38c-d046-4a2a-8072-6cb58eb22832; UM_distinctid=191d06e9d71581-07345aed99cde1-17525637-13c680-191d06e9d728e2; QCCSESSID=572fbb1c4c4a8fa0e6425e552a; tfstk=fzgm_HtRO86Bp-SuZ3zXXMBS96x8hsa_YAQTBPew48y5HtQx_PyiQ83YHjUVG0MKTZ3vcPQglPawppLpJsGb5PP9bDwOhgP3iFQVuZ5Vj9T9ppLpyrChr4JKX6aJY_V_USPa7RRlz5N_7Sza7Q2zsWsN3AkZaQVaTR54bizzUSF_7Rka7QcyrAfzHAkjzK751hdsVG07io2NWW7gL47LqJl4ENJErSvaLjyl7NyfLcnK_AJGWyoIEVqEpFb7kXmzzSmk_gy4xmkYNAYhu-uogqyxuLQY3qGrvVHy_Nyi4DrnYjJRq7mrM4q-8pbgc0kjAl09eeaxvX3_Yq8cd8EQsv4qqL7mLg-N4M540NNy64S1foP7ZJF4dIDovfq20QAlYDZ4NS8pZQjsqoP7ZJdkZMWu07N2J; acw_tc=1a0c384d17258884460576014e004ac09100ae5f4f2251ffeafe53639fe1a2; CNZZDATA1254842228=976068649-1725778796-https%253A%252F%252Fwww.google.com%252F%7C1725888723'