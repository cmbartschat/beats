import { component$, useComputed$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import DateTimeResult from "./date-time-result";
import TimeResult from "./time-result";
import BeatResult from "./beat-result";
import { parseTimestamp } from "~/timestamp";

export default component$(() => {
  const beatInput = useSignal<string>("");
  const dateInputElement = useSignal<HTMLInputElement | undefined>(undefined);
  const dateInput = useSignal<Date | null>(null);
  const timeInput = useSignal<number | null>(null);
  const parsedBeat = useComputed$(() => parseTimestamp(beatInput.value));

  return (
    <>
      <header class="narrow">
        <Nav active="convert" />
      </header>
      <main class="narrow">
        <section class="box">
          <h1>Convert</h1>
          <h2>From your timezone</h2>
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
          <label>
            Enter date (optional) <br />
            <input
              ref={dateInputElement}
              type="date"
              onInput$={(_, e) => {
                const utcDate = e.valueAsDate;

                if (!utcDate) {
                  dateInput.value = null;
                  return;
                }

                const d = new Date();
                d.setFullYear(utcDate.getUTCFullYear());
                d.setMonth(utcDate.getUTCMonth());
                d.setDate(utcDate.getUTCDate());
                d.setHours(0);
                d.setMinutes(0);
                d.setSeconds(0);
                d.setMilliseconds(0);

                dateInput.value = d;
              }}
            />
          </label>
          <button
            disabled={!dateInput.value}
            onClick$={() => {
              if (dateInputElement.value) {
                dateInputElement.value.value = "";
              }
              dateInput.value = null;
            }}
          >
            Clear
          </button>
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
            <input bind:value={beatInput} />
          </label>
          <br />
          <BeatResult time={parsedBeat.value} />
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
