import { component$, Fragment } from "@builder.io/qwik";
import { Choices } from "./choices";
import Lesson from "./lesson";

export const DaySection = component$<{
  me: number;
  step: number;
  next: () => void;
}>((props) => {
  return (
    <Lesson>
      <h2>Dividing the Day</h2>
      <p>
        Instead of splitting the day into 24 hours, then into 1,440 minutes,
        Internet time splits it into 1,000 beats. The day starts with @000 and
        ends with @999.
      </p>
      <h3>Quiz</h3>
      <Choices
        choices={[
          [
            "How many beats are in a full day?",
            "Incorrect.",
            ["1,000", "24", "1,440"],
            0,
          ],
        ]}
      >
        <p q:slot="done">Correct!</p>
        {props.me === props.step && (
          <button q:slot="done" class="shiny-button" onClick$={props.next}>
            Next
          </button>
        )}
      </Choices>
    </Lesson>
  );
});
