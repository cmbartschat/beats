import { component$ } from "@builder.io/qwik";
import { Matching } from "./matching";

export const UnitsSection = component$<{
  me: number;
  step: number;
  next: () => void;
}>((props) => {
  return (
    <>
      <h2>How long is a beat?</h2>
      <p>Since each day is split into 1,000 .beats:</p>
      <p>24 hours ÷ 1,000 ≈ 1.44 minutes per beat</p>
      <h3>Quiz</h3>
      <p>Match the conventional durations with beats</p>
      <Matching
        pairs={[
          ["24 hours", "1,000 beats"],
          ["4 hours", "125 beats"],
          ["14 minutes", "10 beats"],
        ]}
      >
        <div q:slot="done">
          <p>Done!</p>
          {props.me === props.step && (
            <button onClick$={props.next}>Next</button>
          )}
        </div>
        <p q:slot="hint">Review the conversions carefully.</p>
      </Matching>
    </>
  );
});
