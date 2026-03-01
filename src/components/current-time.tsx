import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { beatToMs, dateToBeat } from "~/time";
import BigTime from "./big-time";
import { stringifyTimestamp } from "~/timestamp";

export default component$(() => {
  const now = useSignal(() => dateToBeat(new Date()));

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$((ctx) => {
    let timeout: ReturnType<typeof setTimeout>;

    const update = () => {
      const beat = dateToBeat(new Date());
      const beatGranularity = 0.01;
      const nextWait = beatToMs(beatGranularity - (beat % beatGranularity));
      now.value = beat;
      document.title =
        stringifyTimestamp({ type: "time", beat, hasDecimal: true }) +
        " | Internet Time";
      timeout = setTimeout(update, nextWait);
    };

    update();

    ctx.cleanup(() => {
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
    </>
  );
});
