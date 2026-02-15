import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$<{ active?: "convert" | "home" | "share" | "learn" }>(
  (props) => (
    <nav class="nav">
      <Link
        class="shiny-button grow"
        href="/"
        data-active={props.active === "home"}
      >
        Home
      </Link>{" "}
      <Link
        class="shiny-button grow"
        href="/learn"
        data-active={props.active === "learn"}
      >
        Learn
      </Link>{" "}
      <Link
        class="shiny-button grow"
        href="/convert"
        data-active={props.active === "convert"}
      >
        Convert
      </Link>{" "}
      <Link
        class="shiny-button grow"
        href="/share"
        data-active={props.active === "share"}
      >
        Share
      </Link>
    </nav>
  ),
);
