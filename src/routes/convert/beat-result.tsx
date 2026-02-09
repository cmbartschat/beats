import { component$ } from "@builder.io/qwik";
import { beatToMs, getDuration2 } from "~/time";
import { stringifyTimestamp } from "../../timestamp";
import { Link } from "@builder.io/qwik-city";

export default component$<{ beats: number }>((props) => {
  const link =
    props.beats < 1000 &&
    stringifyTimestamp({
      beat: props.beats,
      type: "time",
      hasDecimal: props.beats % 1 !== 0,
    });

  return (
    <span>
      <>{getDuration2(beatToMs(props.beats))}</>
      <br />
      {link && (
        <Link class="default-link" href={"/" + link}>
          {link}
        </Link>
      )}
    </span>
  );
});
