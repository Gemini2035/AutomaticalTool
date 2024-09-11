import { excelInput, excelOutput } from "./excelAbout";
import { webDriver } from "./webDriver";

const main = async () => {
  console.log('正在读取excel表内容...')
  const excelInputData = await excelInput()
  console.log('excel 表内容读取完毕!')

  // TODO: test for ... of ... or promise.all
  console.log('正在获取数据...')
  const dataForOutput = await Promise.all(excelInputData.map(async ({ data, ...restField }) => {
    if (!data.length) return {
      data,
      ...restField
    }
    return {
      ...(await webDriver(data) || {}),
      ...restField
    }
  }))
  console.log('数据获取完成！')

  console.log('正在写入excel表...')
  excelOutput(dataForOutput);
  console.log('写入excel表完毕!')
};

main();
