import { v5 as uuidv5 } from "uuid";
import {
  ar,
  base,
  de,
  el,
  en,
  es,
  fa,
  Faker,
  fr,
  he,
  hy,
  ja,
  ka_GE,
  ko,
  ne,
  ru,
  ta_IN,
  th,
  tr,
  vi,
  yo_NG,
  zh_CN,
  zu_ZA,
} from "@faker-js/faker";

const LOCALES = [
  ja,
  en,
  zh_CN,
  ko,
  ar,
  fa,
  he,
  hy,
  ka_GE,
  ta_IN,
  ne,
  ru,
  el,
  tr,
  th,
  vi,
  fr,
  de,
  es,
  yo_NG,
  zu_ZA,
];

const FAKERS = LOCALES.map((locale) => new Faker({ locale: [locale, en, base] }));

export type Profile = {
  name: string;
};

function hash(seed: number, salt: number): number {
  let x = (seed + salt * 0x9e3779b9) | 0;
  x = Math.imul(x ^ (x >>> 16), 0x85ebca6b);
  x = Math.imul(x ^ (x >>> 13), 0xc2b2ae35);
  x = (x ^ (x >>> 16)) >>> 0;
  return x;
}

const AGE_RANGE = 101;

export function profile(index: number): Profile {
  const NAMESPACE = "610ff7b6-53de-49f3-87f4-2b71c1d6c830";
  return {
    name: uuidv5(String(index), NAMESPACE),
  };
}
