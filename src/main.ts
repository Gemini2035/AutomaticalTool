import { exportDataToExcel } from "./exportAbout";
import { FileDataCopilot } from "./types";
import { test } from "./webDriver";

const main = () => {
  // const testData: FileDataCopilot[] = [
  //   {
  //     commerce: "a",
  //     phone: "123444",
  //     representative: "阿三",
  //   },
  // ];
  // exportDataToExcel(testData);
  test()
};

main();
