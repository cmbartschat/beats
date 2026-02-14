import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import { parseTimestamp, stringifyTimestamp } from "../../timestamp";
import TimeView from "./time-view";
import DateView from "./date-view";
import { socialPreview } from "~/metadata";

import previewImg from "~/assets/globe.jpeg?url";

export const useParsedTime = routeLoader$((ctx) => {
  const parsed = parseTimestamp(ctx.params.time);

  if (!parsed) {
    if (!ctx.params.time.includes("@")) {
      throw ctx.error(404, "Page not found");
    }
    return ctx.fail(404, {
      type: "invalid" as const,
      stamp: ctx.params.time,
    });
  }
  return parsed;
});

export const head: DocumentHead = (ctx) => {
  const parsed = ctx.resolveValue(useParsedTime);
  if (parsed.type === "invalid") {
    return socialPreview({
      title: "Invalid Timestamp | Internet Time",
      image: previewImg,
      description: "",
    })(ctx);
  }

  return socialPreview({
    title: stringifyTimestamp(parsed) + " | Internet Time",
    image: previewImg,
    description: "Display of current internet time in .beats format",
  })(ctx);
};

export default component$(() => {
  const parsed = useParsedTime().value;

  return (
    <>
      {parsed.type === "time" && <TimeView time={parsed} />}
      {parsed.type === "date" && <DateView time={parsed} />}
      {parsed.type === "invalid" && (
        <div class="narrow">
          <Nav active="share" />
          <div class="box">
            <h1>Invalid timestamp</h1>
            <p>Examples of correct timestamps are:</p>
            <ul>
              <li>
                <Link class="default-link" href={"/@043"}>
                  @043
                </Link>
              </li>
              <li>
                <Link class="default-link" href={"/2025-05-02@640"}>
                  2025-05-02@640
                </Link>
              </li>
              <li>
                <Link class="default-link" href={"/2025-05-02@530.77"}>
                  2025-05-02@530.77
                </Link>
              </li>
            </ul>
            <p>
              You entered:
              <br />
              {parsed.stamp}
            </p>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
});
