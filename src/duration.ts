import { Signal, useSignal, useVisibleTask$ } from "@builder.io/qwik";

const seconds = (n: number) => 1000 * n;
const minutes = (n: number) => 60 * seconds(n);
const hours = (n: number) => 60 * minutes(n);
const days = (n: number) => 24 * hours(n);
const weeks = (n: number) => 7 * days(n);
const months = (n: number) => 30 * days(n);
const years = (n: number) => 365 * days(n);

const TIME_SLICES = [
  { upTo: minutes(2), unit: seconds(1), text: " seconds" },
  { upTo: minutes(120), unit: minutes(1), text: " minutes" },
  { upTo: hours(36), unit: hours(1), text: " hours" },
  { upTo: days(10), unit: days(1), text: " days" },
  { upTo: weeks(5), unit: weeks(1), text: " weeks" },
  { upTo: months(24), unit: months(1), text: " months" },
  { upTo: Infinity, unit: years(1), text: " years" },
];

const getDuration = (
  offset: number,
  qualify: boolean = true,
): [string, number] => {
  const diff = Math.abs(offset);
  const current = TIME_SLICES.find((e) => diff < e.upTo) || TIME_SLICES.at(-1)!;
  const num = (diff / current.unit).toFixed(0);
  const qualifier = qualify ? (offset > 0 ? " from now" : " ago") : "";
  // todo update this to be correct
  return [num + current.text + qualifier, current.unit / 4];
};

const useRelativeDuration = (
  from: number | Date,
  qualify: boolean = true,
): Signal<string> => {
  const duration = useSignal(() => {
    return getDuration(new Date(from).valueOf() - Date.now(), qualify)[0];
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$((ctx) => {
    let timeout: ReturnType<typeof setTimeout>;

    const update = () => {
      const [newDuration, nextWait] = getDuration(
        Number(from) - Date.now(),
        qualify,
      );

      duration.value = newDuration;

      timeout = setTimeout(update, nextWait);
    };

    update();

    ctx.cleanup(() => {
      clearTimeout(timeout);
    });
  });

  return duration;
};

export { useRelativeDuration, getDuration };
