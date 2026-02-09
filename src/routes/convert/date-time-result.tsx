import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { dateToParsed } from "~/time";
import { stringifyTimestamp } from "~/timestamp";

export default component$<{ date: Date; time: number }>((props) => {
  const withTime = new Date(props.date);
  withTime.setMilliseconds(withTime.getMilliseconds() + props.time);
  const link = stringifyTimestamp(dateToParsed(withTime, false));

  return (
    <span>
      <Link class="default-link" href={"/" + link}>
        {link}
      </Link>
    </span>
  );
});
