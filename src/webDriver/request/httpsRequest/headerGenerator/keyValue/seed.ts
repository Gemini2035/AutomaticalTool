export type SeedGenerator = (s: string) => string;

export const seedGenerator: SeedGenerator = (s) => {
  const seeds: Record<string, string> = {
    "0": "W",
    "1": "l",
    "2": "k",
    "3": "B",
    "4": "Q",
    "5": "g",
    "6": "f",
    "7": "i",
    "8": "i",
    "9": "r",
    "10": "v",
    "11": "6",
    "12": "A",
    "13": "K",
    "14": "N",
    "15": "k",
    "16": "4",
    "17": "L",
    "18": "1",
    "19": "8",
  };
  const seeds_n = 20;

  if (!s) {
    s = "/";
  }

  s = s.toLowerCase() + s.toLowerCase();

  let res = "";
  for (let i = 0; i < s.length; i++) {
    res += seeds[(s.charCodeAt(i) % seeds_n).toString()];
  }
  return res;
};
