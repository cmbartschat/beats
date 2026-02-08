import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => (
  <nav>
    <Link class="shiny-button" href="/" data-active="true">
      Home
    </Link>{" "}
    <Link class="shiny-button" href="/convert">
      Convert
    </Link>{" "}
    <Link class="shiny-button" href="/share">
      Share
    </Link>
  </nav>
));
