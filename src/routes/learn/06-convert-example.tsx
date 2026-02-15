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
        <li>PST is UTC-8, so we need to add 9 to get to UTC+1</li>
        <li>Adding 9 gives 8:30 PM</li>
        <li>This is 20.5 hours after midnight</li>
        <li>Divide by 24</li>
        <li>Multiply by 1000</li>
      </ol>

      {props.me === props.step && (
        <button class="shiny-button" onClick$={props.next}>
          Show Me
        </button>
      )}
    </>
  );
});
