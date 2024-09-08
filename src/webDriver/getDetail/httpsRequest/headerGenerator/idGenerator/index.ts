import { httpRequest } from "../..";

export type IdGenerator = () => Promise<{
  pid: string;
  tid: string;
}>;

export const idGenerator: IdGenerator = async () => {
  const resText = await httpRequest<string>({
    url: "web/search/advance?hasState=true"
  }, {
    headerGeneratorForbidden: true
  });

  const pid = resText?.toString().match(/pid='(.*?)'/)?.at(1) || "";
  const tid = resText?.toString().match(/tid='(.*?)'/)?.at(1) || "";

  // TODO: 鲁棒性拓展

  return {
    pid,
    tid,
  };
};
