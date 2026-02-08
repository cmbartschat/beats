import { component$ } from "@builder.io/qwik";
import { ParsedDate } from "./timestamp";
import { Link } from "@builder.io/qwik-city";

export default component$<{ time: ParsedDate }>((props) => {
  return (
    <div class="box">
      <p>
        Valid date: {props.time.year}-{props.time.month}-{props.time.day}@
        {props.time.beat}
      </p>

      <p>TODO: Last time was:xxx</p>

      <p>TODO: Next time will be:xxx</p>

      <p>
        <Link class="shiny-button" href={"/@" + props.time.beat + "/"}>
          Remove date
        </Link>
      </p>
    </div>
  );
});
