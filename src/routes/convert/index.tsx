import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Footer from "~/components/footer";
import Nav from "~/components/nav";

export default component$(() => {
  return (
    <>
      <main>
        <Nav active="convert" />
        <section class="box">
          <label>
            Enter timestamp <br />
            <input />
          </label>
          <br />
          <label>
            Enter beat <br />
            <input />
          </label>
        </section>
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
