import { component$ } from "@builder.io/qwik";
import { ParsedTime } from "./timestamp";
import { Link } from "@builder.io/qwik-city";
import Footer from "~/components/footer";
import Nav from "~/components/nav";

export default component$<{ time: ParsedTime }>((props) => {
  return (
    <>
      <div class="big-time">
        <div class="prefix">
          <div class="label">&nbsp;</div>
          <div class="at">@</div>
        </div>
        <div class="time">
          <span class="inner-at">@</span>
          {String(props.time.beat).padStart(3, "0")}
        </div>
      </div>

      <div class="narrow">
        <Nav active="share" />

        <div class="box">
          <p>TODO: Last time was:xxx</p>

          <p>TODO: Next time will be:xxx</p>

          <p>
            <Link class="shiny-button" href={"/2026-08-12@" + props.time.beat}>
              Add date
            </Link>
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
});
