import { component$ } from "@builder.io/qwik";
import { Choices } from "./choices";

export const DaySection = component$<{
  me: number;
  step: number;
  next: () => void;
}>((props) => {
  return (
    <>
      <h2>Dividing the Day</h2>
      <p>
        Instead of splitting the day into 24 hours, or 1,440 minutes, Internet
        time splits it into 1,000 beats. The day starts with @000 and ends with
        @999.
      </p>
      <h3>Quiz</h3>
      <Choices
        choices={[
          [
            "How many beats are in a full day?",
            "Incorrect.",
            ["1,000", "24", "1,440"],
          ],
        ]}
      >
        <div q:slot="done">
          All done!{" "}
          <button disabled={props.me < props.step} onClick$={props.next}>
            Next
          </button>
        </div>
      </Choices>
    </>
  );
});
