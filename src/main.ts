import { excelInput, excelOutput } from "./excelAbout";
import { webDriver } from "./webDriver";

const testData = [{
  sheetName: '111',
  commerceKeys: ['企业名称', '法人', '电话'],
  data: [
    {
      '企业名称': 'test1',
      '法人': 'test2',
      '电话': 'test3'
    }
  ]
}]

const main = async () => {
  const excelInputData = await excelInput()

  const dataForOutput = excelInputData.map (async({data, ...restField}) => {
    if (!data.length) return {}

    return {
      ...(await webDriver(data) || {}),
      ...restField
    }
  })

  // const testData: CommerceDataInCode[] = [
  //   {
  //     commerce: "a",
  //     phone: "123444",
  //     representative: "阿三",
  //   },
  // ];
  excelOutput(testData);
  // webDriver(['四川川环科技股份有限公司'])
};

main();
