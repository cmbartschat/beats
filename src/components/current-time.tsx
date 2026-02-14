import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { beatToMs, dateToBeat } from "~/time";
import BigTime from "./big-time";

export default component$(() => {
  const now = useSignal(() => dateToBeat(new Date()));
  const updates = useSignal(0);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$((ctx) => {
    let timeout: ReturnType<typeof setTimeout>;
    let frame: ReturnType<typeof requestAnimationFrame>;

    const update = () => {
      const beat = dateToBeat(new Date());
      const beatGranularity = 0.01;
      const nextWait = beatToMs(beatGranularity - (beat % beatGranularity));
      // now.value = beat + updates.value;
      now.value = beat;
      updates.value++;
      document.title = "@" + beat.toFixed(2) + " | Internet Time";
      frame = requestAnimationFrame(() => {
        timeout = setTimeout(update, nextWait);
      });
    };

    update();

    ctx.cleanup(() => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    });
  });

  return (
    <>
      <BigTime
        value={now.value}
        displayDecimal
        label="current internet time"
        animated
      />
      {/* <div class="narrow">{updates}</div> */}
    </>
  );
});
