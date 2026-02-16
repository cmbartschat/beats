import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$<{ active?: "share" | "home" | "tools" }>((props) => (
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
      href="/tools"
      aria-current={props.active === "tools" ? "page" : undefined}
    >
      Tools
    </Link>{" "}
    <Link
      class="shiny-button grow joined"
      href="/share"
      aria-current={props.active === "share" ? "page" : undefined}
    >
      Share
    </Link>
  </nav>
));
