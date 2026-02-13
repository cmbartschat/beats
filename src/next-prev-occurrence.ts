import { useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { ParsedDate, ParsedTime } from "./timestamp";
import { dateToParsed, parsedToDate } from "./time";

const getPrevOccurrence = (now: ParsedDate, time: ParsedTime): ParsedDate => {
  if (now.beat > time.beat) {
    return { ...now, beat: time.beat, hasDecimal: time.hasDecimal };
  } else {
    const yesterday = new Date(parsedToDate(now));
    yesterday.setDate(yesterday.getDate() - 1);
    const res = dateToParsed(yesterday, time.hasDecimal);
    res.beat = time.beat;
    return res;
  }
};

const getNextOccurrence = (now: ParsedDate, time: ParsedTime): ParsedDate => {
  if (now.beat < time.beat) {
    return { ...now, beat: time.beat, hasDecimal: time.hasDecimal };
  } else {
    const tomorrow = new Date(parsedToDate(now));
    tomorrow.setDate(tomorrow.getDate() + 1);
    const res = dateToParsed(tomorrow, time.hasDecimal);
    res.beat = time.beat;
    return res;
  }
};

const useNextPrevOccurrence = (time: ParsedTime) => {
  const prev = useSignal(() =>
    getPrevOccurrence(dateToParsed(Date.now(), false), time),
  );
  const next = useSignal(() =>
    getNextOccurrence(dateToParsed(Date.now(), false), time),
  );

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$((ctx) => {
    let timeout: ReturnType<typeof setTimeout>;
    const baseTime = ctx.track(() => time);
    const update = () => {
      const now = dateToParsed(Date.now(), false);
      prev.value = getPrevOccurrence(now, baseTime);
      const newNext = getNextOccurrence(now, baseTime);
      next.value = newNext;
      const delay = parsedToDate(newNext) - Date.now();
      timeout = setTimeout(update, delay);
    };

    update();

    ctx.cleanup(() => clearTimeout(timeout));
  });

  return [prev, next];
};

export { useNextPrevOccurrence };
