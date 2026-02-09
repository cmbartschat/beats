import { component$ } from "@builder.io/qwik";
import { msToBeat } from "~/time";
import { stringifyTimestamp } from "../../timestamp";
import { Link } from "@builder.io/qwik-city";

export default component$<{ time: number }>((props) => {
  const beat = Math.round(msToBeat(props.time));
  const link = stringifyTimestamp({ beat, type: "time", hasDecimal: false });
  return (
    <span>
      {link}{" "}
      <Link class="default-link" href={"/" + link}>
        Share
      </Link>
    </span>
  );
});
