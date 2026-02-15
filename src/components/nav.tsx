import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$<{ active?: "convert" | "home" | "share" | "learn" }>(
  (props) => (
    <nav class="nav">
      <Link
        class="shiny-button grow joined"
        href="/"
        aria-current={props.active === "home" ? "page" : undefined}
      >
        Home
      </Link>{" "}
      <Link
        class="shiny-button grow joined"
        href="/learn"
        aria-current={props.active === "learn" ? "page" : undefined}
      >
        Learn
      </Link>{" "}
      <Link
        class="shiny-button grow joined"
        href="/convert"
        aria-current={props.active === "convert" ? "page" : undefined}
      >
        Convert
      </Link>{" "}
      <Link
        class="shiny-button grow joined"
        href="/share"
        aria-current={props.active === "share" ? "page" : undefined}
      >
        Share
      </Link>
    </nav>
  ),
);
