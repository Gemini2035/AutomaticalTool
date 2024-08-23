import { exportDataToExcel } from "./exportAbout";
import { FileDataCopilot } from "./types";

const main = () => {
  const testData: FileDataCopilot[] = [
    {
      commerce: "a",
      phone: "123444",
      representative: "阿三",
    },
  ];
  exportDataToExcel(testData);
  setTimeout(() => {}, 3000);
};

main();
