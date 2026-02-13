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

const dateToBeat = (rawDate: Date | number): number => {
  const date = new Date(rawDate);
  date.setUTCMilliseconds(date.getUTCMilliseconds() + MS_PER_HOUR);

  const msPastMidnight =
    ((date.getUTCHours() * 60 + date.getUTCMinutes()) * 60 +
      date.getUTCSeconds()) *
      1000 +
    date.getUTCMilliseconds();
  return msToBeat(msPastMidnight);
};

const dateToParsed = (
  rawDate: Date | number,
  hasDecimal: boolean,
): ParsedDate => {
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

const parsedToDate = (d: ParsedDate): number => {
  return Date.UTC(
    d.year,
    d.month - 1,
    d.day,
    0,
    0,
    0,
    beatToMs(d.beat) - MS_PER_HOUR,
  );
};

export { beatToMs, msToBeat, dateToBeat, parsedToDate, dateToParsed };
