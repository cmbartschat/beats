type ParsedDate = {
  type: "date";
  year: number;
  month: number;
  day: number;
  beat: number;
};
type ParsedTime = { type: "time"; beat: number };

const DATE_REGEX = /^(\d{4,})-(\d{1,2})-(\d{1,2})@(\d+(.\d+)?)$/;
const BEAT_REGEX = /^@(\d+(.\d+)?)$/;

const parseTimestamp = (timestamp: string): ParsedDate | ParsedTime | null => {
  const match = timestamp.match(DATE_REGEX);
  if (match) {
    const [, year, month, day, beat] = match.map((e) => parseFloat(e));
    return { type: "date", year, month, day, beat };
  }

  const beatMatch = timestamp.match(BEAT_REGEX);
  if (beatMatch) {
    return { type: "time", beat: parseFloat(beatMatch[1]) };
  }
  return null;
};

export { parseTimestamp };

export type { ParsedDate, ParsedTime };
