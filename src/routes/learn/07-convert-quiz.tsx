import { component$ } from "@builder.io/qwik";
import { Choices } from "./choices";

export const ConvertQuiz = component$<{
  me: number;
  step: number;
  next: () => void;
}>((props) => {
  return (
    <>
      <h3>Quiz</h3>
      <p>
        Let's do another conversion, step by step. Let's start with 7:15 AM.
      </p>
      <Choices
        choices={[
          [
            "Using the same PST time zone from above, what is the hour offset?",
            "PST is UTC-8, we're trying to convert it to UTC+1",
            ["7 hours", "8 hours", "9 hours"],
            2,
          ],
        ]}
      >
        <Choices
          q:slot="done"
          choices={[
            [
              "What is the new time with the offset applied?",
              "TODO",
              ["4:15 PM", "1:15 AM", "3:45 PM"],
              0,
            ],
          ]}
        >
          <Choices
            q:slot="done"
            choices={[
              [
                "How many hours after midnight is that?",
                "TODO",
                ["16.15", "14.15", "16.25"],
                2,
              ],
            ]}
          >
            <p q:slot="done">
              Well done!
              {props.me === props.step && (
                <>
                  <br />
                  <button
                    q:slot="done"
                    class="shiny-button"
                    onClick$={props.next}
                  >
                    Next
                  </button>
                </>
              )}
            </p>
          </Choices>
        </Choices>
      </Choices>
    </>
  );
});
