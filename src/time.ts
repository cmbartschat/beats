const MS_PER_DAY = 24 * 60 * 60 * 1000;
const BEAT_PER_MS = 1000 / MS_PER_DAY;

const beatToMs = (beat: number): number => {
  return beat / BEAT_PER_MS;
};

const msToBeat = (ms: number): number => {
  return ms * BEAT_PER_MS;
};

const timeToBeat = (time: Date): number => {
  const msPastUtc =
    ((time.getUTCHours() * 60 + time.getUTCMinutes()) * 60 +
      time.getUTCSeconds()) *
      1000 +
    time.getUTCMilliseconds();
  // todo convert utc to cmt
  // const cet = MS_PER_DAY * (1 /24) + msPastUtc
  return msToBeat(MS_PER_DAY * (1 / 24) + msPastUtc);
};

export { beatToMs, msToBeat, timeToBeat };
