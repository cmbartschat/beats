import { component$ } from "@builder.io/qwik";

export const ConvertExample = component$<{
  me: number;
  step: number;
  next: () => void;
}>((props) => {
  return (
    <>
      <h3>Example</h3>
      <p>Let's start with 11:30 AM PST</p>
      <ol>
        <li>PST is UTC-8, so we need to add 9 hours to get to UTC+1</li>
        <li>Adding 9 gives 8:30 PM</li>
        <li>This is 20.5 hours after midnight</li>
        <li>
          20.5 includes 3 multiples of 6, so start with 3 &times; 250 &rarr;
          750.
        </li>
        <li>The remainder is 2.5, which we multiply by 40 to get 100.</li>
        <li>Add them together to get @850.</li>
      </ol>
      <p>
        Note that if we used the exact method (20.5 &times; 1000 ÷ 24), we would
        get @854.
      </p>

      {props.me === props.step && (
        <button class="shiny-button" onClick$={props.next}>
          Next
        </button>
      )}
    </>
  );
});
