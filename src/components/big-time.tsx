import { component$ } from "@builder.io/qwik";
import styles from "./big-time.module.scss";
export default component$<{
  label: string;
  value: number;
  displayDecimal: boolean;
}>((props) => {
  return (
    <>
      <div class={styles.bigTime}>
        <div class={styles.prefix}>
          <h1 class={styles.label}>{props.label}</h1>{" "}
          {/* todo(christoph): Make this a slot */}
          <div class={styles.at}>@</div>
        </div>
        <div class={styles.time}>
          {Math.floor(props.value).toFixed(0).padStart(3, "0")}
        </div>
        {props.displayDecimal ? (
          <div class={styles.decimal}>
            {Math.floor((props.value * 100) % 100)
              .toFixed(0)
              .padStart(2, "0")}
          </div>
        ) : (
          <div class={[styles.decimal, styles.hidden]}>00</div>
        )}
      </div>
    </>
  );
});
