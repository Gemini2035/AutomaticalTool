import { httpRequest } from "@/webDriver/request";

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

  const pid = resText?.match(/pid='(.*?)'/)?.at(1) || "";
  const tid = resText?.match(/tid='(.*?)'/)?.at(1) || "";

  return {
    pid,
    tid,
  };
};
