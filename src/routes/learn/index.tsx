import { $, component$ } from "@builder.io/qwik";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import { socialPreview } from "~/metadata";
import previewImg from "~/assets/globe.jpeg?url";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { UnitsSection } from "./02-units-section";
import { DaySection } from "./01-day-section";
import { DateSection } from "./04-date-section";
import { CentibeatsSection } from "./03-centibeats-section";
import { ConvertIntro } from "./05-convert-intro";
import { Intro } from "./00-intro";
import { ConvertExample } from "./06-convert-example";
import { ConvertQuiz } from "./07-convert-quiz";

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
          <Intro me={0} step={step} next={next} />
          {step >= 1 && <DaySection me={1} step={step} next={next} />}
          {step >= 2 && <UnitsSection me={2} step={step} next={next} />}
          {step >= 3 && <CentibeatsSection me={3} step={step} next={next} />}
          {step >= 4 && <DateSection me={4} step={step} next={next} />}
          {step >= 5 && <ConvertIntro me={5} step={step} next={next} />}
          {step >= 6 && <ConvertExample me={6} step={step} next={next} />}
          {step >= 7 && <ConvertQuiz me={7} step={step} next={next} />}
          {step >= 8 && <p>Lesson complete!</p>}
        </div>
        <Footer />
      </div>
    </>
  );
});
