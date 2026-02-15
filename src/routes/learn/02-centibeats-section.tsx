import { component$ } from "@builder.io/qwik";
import { Matching } from "./matching";

export const CentibeatsSection = component$<{
  me: number;
  step: number;
  next: () => void;
}>((props) => {
  return (
    <>
      <h2>Dividing the beat</h2>
      <p>
        A beat can also be split into centibeats, which are 1/100 of a beat.
      </p>
      <p>24 hours ÷ 100,000 ≈ 0.8 seconds per centibeat</p>

      <h3>Quiz</h3>
      <p>Match the values</p>
      <Matching
        pairs={[
          ["10 centibeats", "8 seconds"],
          ["100 centibeats", "1 beat"],
          ["5 centibeats", "4 seconds"],
        ]}
      >
        <div q:slot="done">
          <p>Done!</p>
          {props.me === props.step && (
            <button onClick$={props.next}>Next</button>
          )}
        </div>
        <p q:slot="hint">Review the conversions carefully.</p>{" "}
      </Matching>
    </>
  );
});
