import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/about";
import Footer from "~/components/footer";
import Nav from "~/components/nav";

export default component$(() => {
  return (
    <>
      <div class="big-time">
        <div class="prefix">
          <h1 class="label">current internet time</h1>
          <div class="at">@</div>
        </div>
        <div class="time">
          <span class="inner-at">@</span>920
        </div>
      </div>
      <main>
        <Nav />
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
