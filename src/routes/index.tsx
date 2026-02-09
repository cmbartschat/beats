import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/about";
import CurrentTime from "~/components/current-time";
import Footer from "~/components/footer";
import Nav from "~/components/nav";

export default component$(() => {
  return (
    <>
      <header class="narrow">
        <Nav active="home" />
      </header>
      <CurrentTime />

      <div class="narrow">
        <About />
        <Footer />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Internet Time",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
