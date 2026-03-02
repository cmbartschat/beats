import { component$ } from "@builder.io/qwik";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import { socialPreview } from "~/metadata";
import previewImg from "~/assets/globe.jpeg?url";
import { YoutubeEmbed } from "./youtube-embed";
import { IconLink } from "./icon-link";

export const head = socialPreview({
  title: "Gallery | Internet Time",
  image: previewImg,
  description: "See uses of Internet time elsewhere on the internet",
});

export default component$(() => {
  return (
    <>
      <header class="narrow">
        <Nav />
      </header>
      <main class="narrow">
        <h1>Gallery</h1>
        <section class="box">
          {/*
          
          https://www.swatch.com/en_us/internet-time/
          */}

          <p>
            <IconLink href="https://www.swatch.com/en_us/internet-time/">
              Internet Time | Swatch
            </IconLink>
          </p>

          <p>
            <IconLink href="https://en.wikipedia.org/wiki/Swatch_Internet_Time">
              Swatch Internet Time | Wikipedia
            </IconLink>
          </p>
          <p>
            <IconLink
              // class="default-link"
              href="https://www.wnycstudios.org/podcasts/otm/articles/15-internet-time"
            >
              On the Media #15 - Internet Time
            </IconLink>
          </p>
          <p>
          <IconLink 
          favicon="/01_DP_Favicon.ico"
          href="https://dimepiece.co/stories/Dream-Watch/06788873-e95c-4e70-b177-ba57cfcdda19">The .beat Watch: Swatch's Y2K Fever Dream</IconLink>
          </p>
          <p>
            <YoutubeEmbed id={"4ROTh6gZz3Y"} title={"Swatch Internet Time"} />
          </p>
          <p>
            <YoutubeEmbed
              id={"D1QMEYVE85o"}
              title={
                "Swatch .Beat - The Failure of Internet Time - Bad Ideas #64"
              }
            />
          </p>
        </section>
        <Footer />
      </main>
    </>
  );
});
