import { ParsedDate } from "./routes/[...time]/timestamp";

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
  // TODO(christoph): Check if this is correct or handles leap seconds correctly
  date.setUTCMilliseconds(date.getUTCMilliseconds() + MS_PER_HOUR);

  const msPastMidnight =
    ((date.getUTCHours() * 60 + date.getUTCMinutes()) * 60 +
      date.getUTCSeconds()) *
      1000 +
    date.getUTCMilliseconds();
  return msToBeat(msPastMidnight);
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

export { beatToMs, msToBeat, dateToBeat, parsedToDate };
