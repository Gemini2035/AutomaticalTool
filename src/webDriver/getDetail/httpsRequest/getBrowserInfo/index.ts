import puppeteer, { Page } from 'puppeteer';
import { getBrowserExe } from './getBrowserExe';

type GetBrowserInfo = () => Promise<{
    ua: string;
    cookie: string;
}>

export const getBrowserInfo: GetBrowserInfo = async () => {
    console.log('需要在浏览器中完成操作...')

    if (!process.env?.CHROMEPOSITION) {
        process.env.CHROMEPOSITION = await getBrowserExe()
    }

    console.log(process.env.CHROMEPOSITION)

    const browser = await puppeteer.launch({
        headless: false,
        executablePath: process.env.CHROMEPOSITION,
        defaultViewport: null,
    });
    const pages = await browser.pages();
    const page = pages[0];

    await page.goto("https://www.qcc.com/weblogin");
    await page.evaluate(() => alert('请注意, 登陆时请使用vip账号!'))

    const result = await new Promise<Page | null>(x => browser.once('targetchanged', target => x(target.page())))

    // TODO: 处理未成功跳转的情况

    if (result?.url() !== 'https://www.qcc.com/') throw new Error;

    const cookie = (await page.cookies())?.[0]?.value
    const ua = await page.evaluate(() => navigator.userAgent)

    await browser.close()

    console.log('用户信息初始化完成! ')

    return {
        cookie,
        ua,
    }
}