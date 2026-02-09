type ParsedDate = {
  type: "date";
  year: number;
  month: number;
  day: number;
  beat: number;
  hasDecimal: boolean;
};
type ParsedTime = { type: "time"; beat: number; hasDecimal: boolean };

const DATE_REGEX = /^(\d{4,})-(\d{1,2})-(\d{1,2})@(\d+(.\d+)?)$/;
const BEAT_REGEX = /^@(\d+(.\d+)?)$/;

const parseTimestamp = (timestamp: string): ParsedDate | ParsedTime | null => {
  console.log(timestamp);
  const match = timestamp.match(DATE_REGEX);
  if (match) {
    const [, year, month, day, beat] = match.map((e) => parseFloat(e));
    return { type: "date", year, month, day, beat, hasDecimal: !!match[5] };
  }

  const beatMatch = timestamp.match(BEAT_REGEX);
  if (beatMatch) {
    return {
      type: "time",
      beat: parseFloat(beatMatch[1]),
      hasDecimal: !!beatMatch[2],
    };
  }
  return null;
};

const stringifyBeat = (beat: number, hasDecimal: boolean) => {
  return hasDecimal
    ? `${beat.toFixed(2)}`.padStart(6, "0")
    : `${Math.floor(beat)}`.padStart(3, "0");
};

const stringifyTimestamp = (time: ParsedDate | ParsedTime) => {
  switch (time.type) {
    case "date":
      return `${time.year.toFixed(0).padStart(4, "0")}-${String(time.month).padStart(2, "0")}-${String(time.day).padStart(2, "0")}@${stringifyBeat(time.beat, time.hasDecimal)}`;
    case "time": {
      return `@${stringifyBeat(time.beat, time.hasDecimal)}`;
    }
  }
};

export { parseTimestamp, stringifyTimestamp };

export type { ParsedDate, ParsedTime };
