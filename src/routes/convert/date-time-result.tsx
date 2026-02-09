import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { msToBeat } from "~/time";
import { stringifyTimestamp } from "~/timestamp";

export default component$<{ date: Date; time: number }>((props) => {
  const beat = Math.round(msToBeat(props.time));
  const link = stringifyTimestamp({
    beat,
    year: props.date.getUTCFullYear(),
    month: props.date.getUTCMonth() + 1,
    day: props.date.getUTCDate(),
    type: "date",
    hasDecimal: true,
  });

  return (
    <span>
      {link}
      <Link href={"/" + link}>Share</Link>
    </span>
  );
});
