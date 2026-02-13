import { component$ } from "@builder.io/qwik";
import { ParsedDate, ParsedTime, stringifyTimestamp } from "../../timestamp";
import { Link } from "@builder.io/qwik-city";

export default component$<{ time: ParsedDate | ParsedTime | null }>((props) => {
  const link = props.time && stringifyTimestamp(props.time);

  return (
    <span>
      {link && (
        <Link class="default-link" href={"/" + link}>
          {link}
        </Link>
      )}
    </span>
  );
});
