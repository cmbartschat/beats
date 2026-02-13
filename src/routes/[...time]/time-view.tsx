import { component$, useComputed$ } from "@builder.io/qwik";
import { ParsedTime, stringifyTimestamp } from "../../timestamp";
import { Link } from "@builder.io/qwik-city";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import BigTime from "~/components/big-time";
import { useNextPrevOccurrence } from "~/next-prev-occurrence";
import { RelativeDuration } from "~/components/relative-duration";
import { parsedToDate } from "~/time";
import { LocalTime } from "~/components/local-time";

export default component$<{ time: ParsedTime }>((props) => {
  const [prev, next] = useNextPrevOccurrence(props.time);
  const prevTime = useComputed$(() => parsedToDate(prev.value));
  const nextTime = useComputed$(() => parsedToDate(next.value));
  return (
    <>
      <header class="narrow">
        <Nav active="share" />
      </header>

      <BigTime
        value={props.time.beat}
        displayDecimal={props.time.hasDecimal}
        label="&nbsp;"
      />
      <div class="narrow">
        <div class="box">
          <p>
            This timestamp represents a time of day that repeats every 24 hours.
          </p>
          <h2>Previous</h2>
          <p>
            <Link
              class="default-link"
              href={"/" + stringifyTimestamp(prev.value)}
            >
              <LocalTime
                date={prevTime.value}
                hasDecimal={prev.value.hasDecimal}
              />
            </Link>
            <br />
            <RelativeDuration date={prevTime.value} qualify />
          </p>
          <h2>Next</h2>
          <p>
            <Link
              class="default-link"
              href={"/" + stringifyTimestamp(next.value)}
            >
              <LocalTime
                date={nextTime.value}
                hasDecimal={next.value.hasDecimal}
              />
            </Link>
            <br />
            <RelativeDuration date={nextTime.value} qualify />
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
});
