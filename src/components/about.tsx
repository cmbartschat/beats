import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => (
  <section class="box">
    <p>
      This site is devoted to Swatch Internet Time, a modern timekeeping system
      for the internet age.
    </p>
    <p>
      To learn more, check out the{" "}
      <Link class="default-link" href="/learn">
        Interactive Tutorial
      </Link>{" "}
      or read the{" "}
      <Link
        class="default-link"
        href="https://en.wikipedia.org/wiki/Swatch_Internet_Time"
      >
        Wikipedia page
      </Link>
      .
    </p>

    <p>
      To see more examples of internet time in use, check out the{" "}
      <Link class="default-link" href="/gallery">
        Gallery
      </Link>
      .
    </p>
  </section>
));
