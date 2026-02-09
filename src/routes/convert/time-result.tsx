import { component$ } from "@builder.io/qwik";
import { dateToParsed } from "~/time";
import { stringifyTimestamp } from "../../timestamp";
import { Link } from "@builder.io/qwik-city";

export default component$<{ time: number }>((props) => {
  const withTime = new Date();
  withTime.setHours(0);
  withTime.setMinutes(0);
  withTime.setMilliseconds(props.time);
  const link = stringifyTimestamp({
    type: "time",
    beat: dateToParsed(withTime, false).beat,
    hasDecimal: false,
  });
  return (
    <span>
      <Link class="default-link" href={"/" + link}>
        {link}
      </Link>
    </span>
  );
});
