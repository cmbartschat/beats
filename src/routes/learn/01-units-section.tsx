import { component$ } from "@builder.io/qwik";
import { Matching } from "./matching";

export const UnitsSection = component$<{
  me: number;
  step: number;
  next: () => void;
}>((props) => {
  return (
    <>
      <h2>Introduction</h2>
      <p>
        Each day is split into 1000 .beats, which are the units of Swatch Time.
      </p>
      <p>24 hours ÷ 1000 ≈ 1.26 minutes.</p>

      <h3>Quiz</h3>
      <p>Match the following values:</p>
      <Matching
        pairs={[
          ["24 hours", "1000 beats"],
          ["4 hours", "125 beats"],
          ["5 minutes", "4 beats"],
        ]}
      >
        <div q:slot="done">
          All done!{" "}
          <button disabled={props.me < props.step} onClick$={props.next}>
            Next
          </button>
        </div>
        <p q:slot="hint">Easy as 1 2 3</p>
      </Matching>
    </>
  );
});
