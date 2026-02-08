import { component$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import { parseTimestamp } from "./timestamp";
import TimeView from "./time-view";
import DateView from "./date-view";

export default component$(() => {
  const location = useLocation();

  const parsed = parseTimestamp(location.params.time);

  return (
    <main>
      <Nav active="share" />
      {parsed && parsed.type === "time" && <TimeView time={parsed} />}
      {parsed && parsed.type === "date" && <DateView time={parsed} />}
      {parsed === null && <div class="box">Unknown timestamp format.</div>}
      <Footer />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
