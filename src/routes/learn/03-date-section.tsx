import { component$ } from "@builder.io/qwik";
import { Choices } from "./choices";

export const DateSection = component$<{
  me: number;
  step: number;
  next: () => void;
}>((props) => {
  return (
    <>
      <h2>Specifying date</h2>
      <p>
        To specify an exact point in time, you need a date (in YYYY-MM-DD
        format) and a beats timestamp, like 2026-02-15@550.
      </p>
      <p>
        Note that this date may not correspond with your local date. The beats
        day resets at midnight on Central European Time (UTC+1). Fun fact: this
        is due to the location of the Swatch company headquarters.
      </p>
      <p>
        If it is 9PM on Feb 15th in California, in beats time, it's already the
        16th @250.
      </p>
      <p>
        This time zone does not adjust with daylight savings, so if you do, the
        relative time may shift from your local time relative to the year.
      </p>

      <h3>True or False?</h3>
      <Choices
        choices={[
          [
            "The beats date always matches the local date.",
            "Consider that if it's the 15th in Europe, it may already be the 16th in Asia, or may still be the 14th in the Americas.",
            ["True", "False"],
            1,
          ],
        ]}
      >
        <div q:slot="done">
          <p>Correct!</p>
          {props.me === props.step && (
            <button onClick$={props.next}>Next</button>
          )}
        </div>
      </Choices>
    </>
  );
});
