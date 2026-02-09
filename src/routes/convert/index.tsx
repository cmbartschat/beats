import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CurrentTime from "~/components/current-time";
import Footer from "~/components/footer";
import Nav from "~/components/nav";

export default component$(() => {
  return (
    <>
      {" "}
      <CurrentTime />
      <header class="narrow">
        <Nav active="convert" />
      </header>
      <main class="narrow">
        {/* <Nav active="convert" /> */}
        <section class="box">
          <h1>Convert</h1>

          <label>
            Enter timestamp <br />
            <input />
          </label>
          <br />
          <label>
            Enter beat <br />
            <input />
          </label>
          <br />
        </section>
        <Footer />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Convert Internet Time",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
