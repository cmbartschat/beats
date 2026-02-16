import { component$ } from "@builder.io/qwik";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import { socialPreview } from "~/metadata";
import previewImg from "~/assets/globe.jpeg?url";
import { Link } from "@builder.io/qwik-city";

export const head = socialPreview({
  title: "Tools | Internet Time",
  image: previewImg,
  description: "Convert to and from internet time in .beats format",
});

export default component$(() => {
  return (
    <>
      <header class="narrow">
        <Nav active="tools" />
      </header>
      <main class="narrow">
        <h1>Tools</h1>
        <section class="box">
          <article>
            <h2>Convert</h2>
            <p>Convert to/from internet time</p>
            <Link href="/convert" class="default-link">
              Open
            </Link>
          </article>
          <article>
            <h2>Reminders</h2>
            <p>Schedule reminders and create timers</p>
            <Link href="#" class="default-link">
              Open (TODO)
            </Link>
          </article>
        </section>
        <Footer />
      </main>
    </>
  );
});
