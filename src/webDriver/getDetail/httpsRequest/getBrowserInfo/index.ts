import puppeteer, { Page } from 'puppeteer';
import { getBrowserExe } from './getBrowserExe';
import { BASE_CONFIG } from '@/baseConfig';

type GetBrowserInfo = () => Promise<{
    ua: string;
    cookie: string;
}>

let browserPath = process.env?.CHROMEPOSITION

export const getBrowserInfo: GetBrowserInfo = async () => {
    console.log('需要在浏览器中完成操作...')

    if (!browserPath) browserPath = await getBrowserExe()

    const browser = await puppeteer.launch({
        headless: false,
        executablePath: browserPath,
        defaultViewport: null,
    });
    const pages = await browser.pages();
    const page = pages[0];

    await page.goto(`${BASE_CONFIG.BASE_URL}/weblogin`);
    await page.evaluate(() => alert('请注意, 登陆时请使用vip账号!'))

    const result = await new Promise<Page | null>(x => browser.once('targetchanged', target => x(target.page())))

    // TODO: 处理未成功跳转的情况

    if (result?.url() !== `${BASE_CONFIG.BASE_URL}/`) throw new Error;

    const cookie = (await page.cookies())?.[0]?.value
    const ua = await page.evaluate(() => navigator.userAgent)

    await browser.close()

    console.log('用户信息初始化完成! ')

    return {
        cookie,
        ua,
    }
}