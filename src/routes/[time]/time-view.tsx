import { component$ } from "@builder.io/qwik";
import { ParsedTime } from "./timestamp";
import { Link } from "@builder.io/qwik-city";

export default component$<{ time: ParsedTime }>((props) => {
  return (
    <div class="box">
      <p>Valid time: @{props.time.beat}</p>

      <p>TODO: Last time was:xxx</p>

      <p>TODO: Next time will be:xxx</p>

      <p>
        <Link
          class="shiny-button"
          href={"/2026-08-12@" + props.time.beat + "/"}
        >
          Add date
        </Link>
      </p>
    </div>
  );
});
