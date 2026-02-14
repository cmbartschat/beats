import { component$ } from "@builder.io/qwik";
import About from "~/components/about";
import CurrentTime from "~/components/current-time";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import { socialPreview } from "~/metadata";
import previewImg from "~/assets/globe.jpg?url";

export const head = socialPreview({
  title: "Internet Time",
  image: previewImg,
  description: "Display of current internet time in .beats format",
});

export default component$(() => {
  return (
    <>
      <header class="narrow">
        <Nav active="home" />
      </header>
      <CurrentTime />

      <div class="narrow">
        <About />
        <Footer />
      </div>
    </>
  );
});
