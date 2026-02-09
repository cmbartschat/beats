import { component$ } from "@builder.io/qwik";
import { ParsedDate } from "./timestamp";
import { Link } from "@builder.io/qwik-city";
import Footer from "~/components/footer";
import { parsedToDate } from "~/time";
import Nav from "~/components/nav";
import BigTime from "~/components/big-time";

export default component$<{ time: ParsedDate }>((props) => {
  const timestamp = parsedToDate(props.time).toString();
  return (
    <>
      <BigTime
        value={props.time.beat}
        displayDecimal={props.time.hasDecimal}
        label={`${props.time.year}-${String(props.time.month).padStart(2, "0")}-${String(props.time.day).padStart(2, "0")}`}
      />
      <div class="narrow">
        <Nav active="share" />
        <div class="box">
          <p>In your timezone, this is {timestamp}</p>
          <p>
            <Link class="shiny-button" href={"/@" + props.time.beat}>
              Remove date
            </Link>
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
});
