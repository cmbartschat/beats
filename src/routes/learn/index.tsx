import { $, component$ } from "@builder.io/qwik";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import { socialPreview } from "~/metadata";
import previewImg from "~/assets/globe.jpeg?url";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { UnitsSection } from "./01-units-section";
import { DaySection } from "./00-day-section";

export const head = socialPreview({
  title: "Learn | Internet Time",
  image: previewImg,
  description: "Interactive intro to the .beats time format",
});

export default component$(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const step = Number(location.url.searchParams.get("step")) || 0;
  const next = $(() => {
    console.log("navigating to step after", step);
    navigate("?" + new URLSearchParams({ step: String(step + 1) }), {
      scroll: false,
    });
  });

  return (
    <>
      <header class="narrow">
        <Nav active="learn" />
      </header>
      <div class="narrow">
        <h1>Learn how Internet Time Works</h1>
        <div class="box">
          <p>
            The Swatch Time format, invented by the Swatch watch company,
            provides a simple way to refer to a time of day with just 3 digits,
            like @444.
          </p>
          <p>
            This interactive lesson will teach you how to work with internet
            time.
          </p>
          {step === 0 && (
            <div>
              <button class="shiny-button" onClick$={next}>
                Start
              </button>
            </div>
          )}
          {step > 0 && <DaySection me={0} step={step} next={next} />}
          {step > 1 && <UnitsSection me={1} step={step} next={next} />}
        </div>
        <Footer />
      </div>
    </>
  );
});
