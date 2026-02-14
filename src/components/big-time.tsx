import { component$ } from "@builder.io/qwik";
import styles from "./big-time.module.scss";
export default component$<{
  label: string;
  value: number;
  displayDecimal: boolean;
  animated?: boolean;
}>((props) => {
  const decimal = props.displayDecimal
    ? Math.floor((props.value * 100) % 100)
        .toFixed(0)
        .padStart(2, "0")
    : "00";
  return (
    <>
      <h1 class={styles.bigTime}>
        <div class={styles.prefix}>
          <div class={styles.label}>{props.label}</div>
          <div class={styles.at}>@</div>
        </div>
        <div class={styles.time}>
          {Math.floor(props.value).toFixed(0).padStart(3, "0")}
        </div>
        {props.displayDecimal ? (
          <div
            key={decimal}
            class={[styles.decimal, props.animated && styles.animatedFade]}
          >
            {decimal}
          </div>
        ) : (
          <div class={[styles.decimal, styles.hidden]}>00</div>
        )}
      </h1>
    </>
  );
});
