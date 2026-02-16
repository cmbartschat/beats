import { component$ } from "@builder.io/qwik";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import { socialPreview } from "~/metadata";
import previewImg from "~/assets/globe.jpeg?url";
import { Link } from "@builder.io/qwik-city";
import { YoutubeEmbed } from "./youtube-embed";

export const head = socialPreview({
  title: "Tools | Internet Time",
  image: previewImg,
  description: "Convert to and from internet time in .beats format",
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
          https://en.wikipedia.org/wiki/Swatch_Internet_Time
          https://youtu.be/D1QMEYVE85o
          */}

          <p>
            <Link href="https://www.wnycstudios.org/podcasts/otm/articles/15-internet-time">
              On the Media #15 - Internet Time
            </Link>
          </p>

          <p>
            <Link href="https://www.wnycstudios.org/podcasts/otm/articles/15-internet-time">
              On the Media #15 - Internet Time
            </Link>
          </p>

          <YoutubeEmbed id={"4ROTh6gZz3Y"} title={"Swatch Internet Time"} />
          <YoutubeEmbed
            id={"D1QMEYVE85o"}
            title={
              "Swatch .Beat - The Failure of Internet Time - Bad Ideas #64"
            }
          />
        </section>
        <Footer />
      </main>
    </>
  );
});
