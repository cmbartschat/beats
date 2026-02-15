import { component$ } from "@builder.io/qwik";
import { Choices } from "./choices";

export const DateSection = component$<{
  me: number;
  step: number;
  next: () => void;
}>((props) => {
  return (
    <>
      <h2>Specifying Dates</h2>
      <p>
        To specify an exact point in time, you need a date (in YYYY-MM-DD
        format) and a beats timestamp, like 2026-02-15@550.
      </p>
      <p>
        Note that this date may not correspond with your local date. The beats
        day resets at midnight UTC+1. Fun fact: this is due to the location of
        the Swatch company headquarters in Switzerland.
      </p>
      <p>
        If it is 9PM on Feb 15th in California, in beats time, it's already the
        @250 on the 16th in beats time.
      </p>
      <p>This time zone does not adjust with daylight savings.</p>

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
            <button class="shiny-button" onClick$={props.next}>
              Next
            </button>
          )}
        </div>
      </Choices>
    </>
  );
});
