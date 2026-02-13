import { component$ } from "@builder.io/qwik";
import { ParsedDate, stringifyTimestamp } from "../../timestamp";
import { Link } from "@builder.io/qwik-city";
import Footer from "~/components/footer";
import { parsedToDate } from "~/time";
import Nav from "~/components/nav";
import BigTime from "~/components/big-time";
import { LocalTime } from "~/components/local-time";
import { RelativeDuration } from "~/components/relative-duration";
import { GoogleCalendarLink } from "~/components/google-calendar-link";

export default component$<{ time: ParsedDate }>((props) => {
  return (
    <>
      <header class="narrow">
        <Nav active="share" />
      </header>
      <BigTime
        value={props.time.beat}
        displayDecimal={props.time.hasDecimal}
        label={`${props.time.year}-${String(props.time.month).padStart(2, "0")}-${String(props.time.day).padStart(2, "0")}`}
      />
      <div class="narrow">
        <div class="box">
          <p>
            <RelativeDuration date={parsedToDate(props.time)} qualify />
            <br />
            <LocalTime
              date={parsedToDate(props.time)}
              hasDecimal={props.time.hasDecimal}
            ></LocalTime>
          </p>
          <p class="nav">
            <Link
              class="shiny-button"
              href={stringifyTimestamp({ ...props.time, type: "time" })}
            >
              Remove date
            </Link>
            <GoogleCalendarLink date={new Date(parsedToDate(props.time))} />
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
});
