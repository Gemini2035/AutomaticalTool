import BASE_CONFIG from "./baseConfig";
import { restoreBreakPoint, storeBreakPoint } from "./breakPoint";
import { excelInput, excelOutput } from "./excelAbout";
import { webDriver } from "./webDriver";

const main = async () => {

  let excelInputData = []
  const dataForOutput = []
  let total = 0

  const breakPoint = await restoreBreakPoint()

  if (breakPoint) {
    const { name, remainData, pauseTime, dataTotal } = breakPoint
    console.log('正在恢复断点... 文件名: ', name)
    console.log('断点时间: ', pauseTime)
    excelInputData = remainData
    total = dataTotal

  } else {
    console.log('未找到断点信息, 正在读取excel表内容...')
    excelInputData = await excelInput('input')
    total = excelInputData.length
    console.log('excel 表内容读取完毕!')
  }

  storeBreakPoint({ meta: { code: -1, msg: 'test' }, remainData: excelInputData, dataTotal: total, prevExcelFile: '' })

  console.log('开始获取数据...')
  const maxRequest = Number(BASE_CONFIG.MAX_DAILY_REQUEST)
  for (let i = 0; i < maxRequest; i++) {
    const { data, ...restField } = excelInputData[i]
    dataForOutput.push({
      ...(await webDriver(data) || {}),
      ...restField
    })
    if (i === maxRequest) {
      console.log('reach max size of request')
      console.log('本轮数据获取完成！')
      break;
    }
    if (i === excelInputData.length) {
      console.log('all data has been fetched')
      console.log('数据获取完成！')
      break;
    }
  }

  console.log('正在写入excel表...')
  excelOutput(dataForOutput, breakPoint?.prevExcelFile);
  console.log('写入excel表完毕!')
};

// global
main();
