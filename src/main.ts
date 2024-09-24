import { excelInput, excelOutput } from "./excelAbout";
import { webDriver } from "./webDriver";

const main = async () => {
  console.log('正在读取excel表内容...')
  const excelInputData = await excelInput()
  console.log('excel 表内容读取完毕!')

  console.log('正在获取数据...')
  const dataForOutput = []
  for (const { data, ...restField } of excelInputData)
    dataForOutput.push({
      ...(await webDriver(data) || {}),
      ...restField
    })
  console.log('数据获取完成！')

  console.log('正在写入excel表...')
  excelOutput(dataForOutput);
  console.log('写入excel表完毕!')
};

// global
main();
