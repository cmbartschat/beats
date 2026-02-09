import { component$ } from "@builder.io/qwik";
import { ParsedTime, stringifyPath } from "./timestamp";
import { Link } from "@builder.io/qwik-city";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import BigTime from "~/components/big-time";

export default component$<{ time: ParsedTime }>((props) => {
  return (
    <>
      <BigTime
        value={props.time.beat}
        displayDecimal={props.time.hasDecimal}
        label="&nbsp;"
      />
      <header class="narrow">
        <Nav active="share" />
      </header>
      <div class="narrow">
        <div class="box">
          <p>TODO: Last time was:xxx</p>

          <p>TODO: Next time will be:xxx</p>

          <p>
            <Link
              class="shiny-button"
              href={stringifyPath({
                ...props.time,
                year: 2027,
                month: 1,
                day: 31,
                type: "date",
              })}
            >
              Add date
            </Link>
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
});
