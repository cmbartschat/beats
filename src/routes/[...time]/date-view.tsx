import { component$ } from "@builder.io/qwik";
import { ParsedDate } from "./timestamp";
import { Link } from "@builder.io/qwik-city";
import Footer from "~/components/footer";

export default component$<{ time: ParsedDate }>((props) => {
  return (
    <>
      <div class="big-time">
        <div class="prefix">
          <h1 class="label">
            {props.time.year}-{String(props.time.month).padStart(2, "0")}-
            {String(props.time.day).padStart(2, "0")}
          </h1>
          <div class="at">@</div>
        </div>
        <div class="time">
          <span class="inner-at">@</span>
          {String(props.time.beat).padStart(3, "0")}
        </div>
      </div>
      <main>
        <div class="box">
          <p>
            <Link class="shiny-button" href={"/@" + props.time.beat}>
              Remove date
            </Link>
          </p>
        </div>
        <Footer />
      </main>
    </>
  );
});
