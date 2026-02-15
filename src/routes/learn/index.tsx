import { component$, useSignal } from "@builder.io/qwik";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import { socialPreview } from "~/metadata";
import previewImg from "~/assets/globe.jpeg?url";
import { Link, useLocation, useNavigate } from "@builder.io/qwik-city";
import { dateToBeat } from "~/time";
import { stringifyTimestamp } from "~/timestamp";

export const head = socialPreview({
  title: "Learn | Internet Time",
  image: previewImg,
  description: "Interactive intro to the .beats time format",
});

export default component$(() => {
  const location = useLocation();
  const step = location.url.searchParams.get("step") || "1";
  const navigate = useNavigate();
  const error = useSignal("");
  const step2Response = useSignal("");
  const wokeUpAt = useSignal("");
  const sleptAt = useSignal("");
  return (
    <>
      <header class="narrow">
        <Nav />
      </header>
      <div class="narrow">
        <h1>Learn how Internet Time Works</h1>
        <div class="box">
          {step === "1" && (
            <>
              <p>
                This interactive demo should give you a sense of how to work
                with internet time.
              </p>
              <div>
                <Link class="shiny-button" href="?step=2">
                  Next
                </Link>
              </div>
            </>
          )}
          {step === "2" && (
            <>
              <p>
                Internet time uses the .beat as its base unit. 1,000 .beats are
                to 24 hours. The day starts at @000 .beats, and then ends with
                @999 before resetting to @000 again.
              </p>
              <form
                preventdefault:submit
                onSubmit$={() => {
                  if (step2Response.value.trim() === "500") {
                    error.value = "";
                    navigate("?step=3");
                  } else {
                    error.value =
                      "Incorrect. Remember, 1000 beats is 24 hours.";
                  }
                }}
              >
                <label>
                  How many beats are there in 12 hours?
                  <br />
                  <input bind:value={step2Response} />
                </label>
                <div>
                  <button type="submit" class="shiny-button">
                    Check
                  </button>
                </div>
                {error.value && <p>{error}</p>}
              </form>
            </>
          )}

          {step === "3" && (
            <>
              <p>Let's get a little more used to working with .beats.</p>
              <form
                preventdefault:submit
                onSubmit$={() => {
                  navigate("?step=4");
                }}
              >
                <label>
                  What time did you wake up today?
                  <br />
                  <input type="time" bind:value={wokeUpAt} />
                </label>
                <div>
                  <button type="submit" class="shiny-button">
                    Next
                  </button>
                </div>
              </form>
            </>
          )}
          {step === "4" && (
            <>
              <p>
                When you woke up at {wokeUpAt}, it was{" "}
                {stringifyTimestamp({
                  type: "time",
                  hasDecimal: false,
                  beat: dateToBeat(new Date(wokeUpAt.value)),
                })}{" "}
                in internet time.
              </p>
              <div>
                <Link class="shiny-button" href="?step=5">
                  Next
                </Link>
              </div>
            </>
          )}
          {step === "5" && (
            <>
              <form
                preventdefault:submit
                onSubmit$={() => {
                  navigate("?step=6");
                }}
              >
                <label>
                  What time did you go to sleep last night?
                  <br />
                  <input type="time" bind:value={sleptAt} />
                </label>
                <div>
                  <button type="submit" class="shiny-button">
                    Next
                  </button>
                </div>
              </form>
            </>
          )}

          {step === "6" && (
            <>
              <p>End.</p>
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
});
