import { component$, Slot } from "@builder.io/qwik";

import styles from "./spaced.module.scss";

export default component$<{
  vertical?: boolean;
  horizontal?: boolean;
  columns?: 2 | 3;
}>((props) => (
  <div
    class={{
      [styles.spaced]: true,
      [styles.vertical]: props.vertical,
      [styles.horizontal]: props.horizontal,
      [styles.twoColumn]: props.columns === 2,
      [styles.threeColumn]: props.columns === 3,
    }}
  >
    <Slot />
  </div>
));
