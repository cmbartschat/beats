import { component$ } from "@builder.io/qwik";

export const Intro = component$<{
  me: number;
  step: number;
  next: () => void;
}>((props) => {
  return (
    <>
      <p>
        The Swatch Time format, invented by the Swatch watch company, provides a
        simple way to refer to a time of day with just 3 digits, like @444. It
        allows anyone on Earth to coordinate using a shared, easy to use time
        format.
      </p>
      <p>
        This interactive lesson will teach you how to work with internet time.
      </p>
      {props.step === props.me && (
        <button class="shiny-button" onClick$={props.next}>
          Start
        </button>
      )}
    </>
  );
});
