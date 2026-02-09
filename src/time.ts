import { ParsedDate } from "./timestamp";

const MS_PER_HOUR = 60 * 60 * 1000;
const MS_PER_DAY = 24 * MS_PER_HOUR;
const BEAT_PER_MS = 1000 / MS_PER_DAY;

const beatToMs = (beat: number): number => {
  return beat / BEAT_PER_MS;
};

const msToBeat = (ms: number): number => {
  return ms * BEAT_PER_MS;
};

const dateToBeat = (rawDate: Date): number => {
  const date = new Date(rawDate);
  date.setUTCMilliseconds(date.getUTCMilliseconds() + MS_PER_HOUR);

  const msPastMidnight =
    ((date.getUTCHours() * 60 + date.getUTCMinutes()) * 60 +
      date.getUTCSeconds()) *
      1000 +
    date.getUTCMilliseconds();
  return msToBeat(msPastMidnight);
};

const dateToParsed = (rawDate: Date, hasDecimal: boolean): ParsedDate => {
  const date = new Date(rawDate);
  date.setUTCMilliseconds(date.getUTCMilliseconds() + MS_PER_HOUR);

  const msPastMidnight =
    ((date.getUTCHours() * 60 + date.getUTCMinutes()) * 60 +
      date.getUTCSeconds()) *
      1000 +
    date.getUTCMilliseconds();
  return {
    type: "date",
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    beat: msToBeat(msPastMidnight),
    hasDecimal,
  };
};

const parsedToDate = (d: ParsedDate): Date => {
  const utcDate =
    d.year +
    "-" +
    String(d.month).padStart(2, "0") +
    "-" +
    String(d.day).padStart(2, "0") +
    "T00:00:00Z";
  const date = new Date(utcDate);
  console.log(utcDate, d, date);
  date.setMilliseconds(date.getMilliseconds() + beatToMs(d.beat) + MS_PER_HOUR);
  return date;
};

const seconds = (n: number) => 1000 * n;
const minutes = (n: number) => 60 * seconds(n);
const hours = (n: number) => 60 * minutes(n);
const days = (n: number) => 24 * hours(n);
const weeks = (n: number) => 7 * days(n);
const months = (n: number) => 30 * days(n);
const years = (n: number) => 365 * days(n);

const TIME_SLICES2 = [
  { upTo: minutes(120), unit: minutes(1), text: " minutes" },
  { upTo: hours(36), unit: hours(1), text: " hours" },
  { upTo: days(10), unit: days(1), text: " days" },
  { upTo: weeks(5), unit: weeks(1), text: " weeks" },
  { upTo: months(24), unit: months(1), text: " months" },
  { upTo: years(1000), unit: years(1), text: " years" },
  { upTo: Infinity, text: "forever" },
];

const getDuration2 = (diff: number): string => {
  const current = TIME_SLICES2.find((e) => diff < e.upTo)!;
  if (current.unit) {
    const num = (diff / current.unit).toFixed(1).replace(/\.0$/, "");
    return num + current.text;
  }
  return current.text;
};

export {
  beatToMs,
  msToBeat,
  dateToBeat,
  parsedToDate,
  getDuration2,
  dateToParsed,
};
