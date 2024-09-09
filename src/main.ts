import { excelInput } from "./excelAbout";
import { webDriver } from "./webDriver";

const main = async () => {
  const excelInputData = await excelInput()
  
  console.log(excelInputData[0].data[0])

  // const testData: CommerceDataInCode[] = [
  //   {
  //     commerce: "a",
  //     phone: "123444",
  //     representative: "阿三",
  //   },
  // ];
  // exportDataToExcel(testData);
  // webDriver(['四川川环科技股份有限公司'])
};

main();
