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
        <li>Get the offset between your time zone and UTC+1.</li>
        <li>Add the offset to the time.</li>
        <li>Convert the time to hours after midnight.</li>
        <li>Take out multiples of 3, multiply that by 125.</li>
        <li>Multiply the remainder by 40.</li>
        <li>Add the results together.</li>
      </ol>

      <p>
        If you have a calculator with you, (hours after midnight &times; 1,000 ÷
        24) will give an exact answer.
      </p>

      {props.me === props.step && (
        <button class="shiny-button" onClick$={props.next}>
          Show Me
        </button>
      )}
    </>
  );
});
