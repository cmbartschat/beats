import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CurrentTime from "~/components/current-time";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import { beatToMs } from "~/time";
import DateTimeResult from "./date-time-result";
import TimeResult from "./time-result";

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

export default component$(() => {
  const beatInput = useSignal<number | null>(null);
  const dateInputElement = useSignal<HTMLInputElement | undefined>(undefined);
  const dateInput = useSignal<Date | null>(null);
  const timeInput = useSignal<number | null>(null);

  return (
    <>
      <CurrentTime />
      <header class="narrow">
        <Nav active="convert" />
      </header>
      <main class="narrow">
        <section class="box">
          <h1>Convert</h1>

          <h2>From your timezone</h2>
          <label>
            Enter date (optional) <br />
            <input
              ref={dateInputElement}
              type="date"
              onInput$={(_, e) => {
                dateInput.value = Number.isFinite(e.valueAsDate?.valueOf())
                  ? e.valueAsDate
                  : null;
              }}
            />
          </label>
          <button
            onClick$={() => {
              if (dateInputElement.value) {
                dateInputElement.value.value = "";
              }
            }}
          >
            Clear
          </button>

          <br />
          <label>
            Enter time <br />
            <input
              type="time"
              onInput$={(_, e) => {
                timeInput.value = e.valueAsNumber ?? null;
              }}
            />
          </label>
          <br />
          {timeInput.value !== null &&
            (dateInput.value !== null ? (
              <DateTimeResult date={dateInput.value} time={timeInput.value} />
            ) : (
              <TimeResult time={timeInput.value} />
            ))}
          <h2>From Internet Time</h2>
          <label>
            Enter beat <br />
            <input
              type="number"
              onInput$={(_, e) => {
                if (e.valueAsNumber || e.valueAsNumber === 0) {
                  beatInput.value = e.valueAsNumber;
                } else {
                  beatInput.value = null;
                }
              }}
            />
          </label>
          <br />
          {beatInput.value !== null && (
            <>{getDuration2(beatToMs(beatInput.value))}</>
          )}
          <ul>
            <li>dateInput: {String(dateInput.value)}</li>
            <li>timeInput: {String(timeInput.value)}</li>
          </ul>
        </section>
        <Footer />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Convert | Internet Time",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
