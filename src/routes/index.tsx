import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/about";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import { beatToMs, timeToBeat } from "~/time";

export default component$(() => {
  const now = useSignal(() => timeToBeat(new Date()));

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$((ctx) => {
    let timeout: ReturnType<typeof setTimeout>;

    const update = () => {
      const beat = timeToBeat(new Date());
      const nextWait = beatToMs(1 - (beat % 1));
      // const nextWait = beatToMs(.01 - (beat % .01));
      now.value = beat;
      timeout = setTimeout(update, nextWait);
    };

    update();

    ctx.cleanup(() => clearTimeout(timeout));
  });
  return (
    <>
      <main>
        <Nav active="home" />
      </main>
      <div class="big-time">
        <div class="prefix">
          <h1 class="label">current internet time</h1>
          <div class="at">@</div>
        </div>
        <div class="time">
          <span class="inner-at">@</span>
          {Math.floor(now.value).toFixed(0).padStart(3, "0")}
        </div>
      </div>
      <main>
        <About />
        <Footer />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
