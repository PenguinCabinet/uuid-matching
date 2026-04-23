import { layout, prepare, type PreparedText } from "@chenglou/pretext";
import { profile } from "./profile.ts";

const HEADER_FONT = '700 16px "Helvetica Neue"';
const HEADER_LINE_HEIGHT = 24;
const ROW_PADDING = 12;

const prepCache = new Map<string, PreparedText>();

function cachedPrepare(text: string, font: string): PreparedText {
  const key = `${font}\n${text}`;
  let p = prepCache.get(key);
  if (!p) {
    p = prepare(text, font);
    prepCache.set(key, p);
  }
  return p;
}

export function rowHeight(index: number, width: number): number {
  const p = profile(index);
  const header = `#${p.id.toLocaleString("ja-JP")}  ${p.name}（${p.age}歳）`;
  return (
    layout(cachedPrepare(header, HEADER_FONT), width, HEADER_LINE_HEIGHT).height + ROW_PADDING * 2
  );
}

const SAMPLE_COUNT = 200;

export function averageRowHeight(width: number): number {
  let total = 0;
  for (let i = 0; i < SAMPLE_COUNT; i++) {
    total += rowHeight(i, width);
  }
  return Math.ceil(total / SAMPLE_COUNT);
}
