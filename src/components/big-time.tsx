import { component$ } from "@builder.io/qwik";

export default component$<{
  label: string;
  value: number;
  displayDecimal: boolean;
}>((props) => {
  return (
    <>
      <div class="big-time">
        <div class="prefix">
          <h1 class="label">{props.label}</h1>{" "}
          {/* todo(christoph): Make this a slot */}
          <div class="at">@</div>
        </div>
        <div class="time">
          <span class="inner-at">@</span>
          {Math.floor(props.value).toFixed(0).padStart(3, "0")}
        </div>
        {props.displayDecimal && (
          <div class="decimal">
            {Math.floor((props.value * 100) % 100)
              .toFixed(0)
              .padStart(2, "0")}
          </div>
        )}
      </div>
    </>
  );
});
