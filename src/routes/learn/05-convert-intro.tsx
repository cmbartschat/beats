import { component$ } from "@builder.io/qwik";

export const ConvertIntro = component$<{
  me: number;
  step: number;
  next: () => void;
}>((props) => {
  return (
    <>
      <h2>Conversion</h2>
      <p>
        We've just learned about the beat and centibeats unit, and how beat time
        works in relation to time zones.
      </p>
      <p>
        Next we're going to go step by step, converting a time from your local
        time into Swatch beats time. The steps are:
      </p>

      <ol>
        <li>Get the offset between your time zone and UTC+1</li>
        <li>Add the offset to the time</li>
        <li>Convert the time to hours after midnight</li>
        <li>Multiply by 1000 / 24, which is approximately 40.</li>
      </ol>

      {props.me === props.step && (
        <button class="shiny-button" onClick$={props.next}>
          Show Me
        </button>
      )}
    </>
  );
});
