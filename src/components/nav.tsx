import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$<{ active?: "convert" | "home" | "share" }>(
  (props) => (
    <nav>
      <Link class="shiny-button" href="/" data-active={props.active === "home"}>
        Home
      </Link>{" "}
      <Link
        class="shiny-button"
        href="/convert"
        data-active={props.active === "convert"}
      >
        Convert
      </Link>{" "}
      <Link
        class="shiny-button"
        href="/share"
        data-active={props.active === "share"}
      >
        Share
      </Link>
    </nav>
  ),
);
