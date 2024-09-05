import { httpRequest } from "@/webDriver/request";

export type WebDriver = (names: string[]) => Promise<boolean>;

export const webDriver = async (names: string[]) => {
  const failNameList = [];
  names.forEach(async (name) => {
    const result = await itemDriver(name);
    if (!result) failNameList.push(name);
  });
};

type ItemDriver = (
  name: string
) => Promise<boolean>;

const itemDriver: ItemDriver = async (name) => {

  const searchMindPath = `/api/search/searchMind?mindKeyWords=true&mindType=9&pageSize=2&person=true&searchKey=${encodeURI(
    name
  )}&suggest=true`;

  const requestList = await httpRequest<{ list: { KeyNo: string }[] }>({
    url: searchMindPath
  });

  const pageNumber = requestList?.list?.at(1)?.KeyNo;
  if (!pageNumber) return false;
  const pageDetailPath = `/firm/${pageNumber}.html`
  console.log(
    await httpRequest({
      url: pageDetailPath,
    })
  );

  setTimeout(() => {}, 3000);
  return true;
};
