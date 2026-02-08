import { component$ } from "@builder.io/qwik";

export default component$(() => (
  <section class="box">
    <p>
      Unlike your local time, internet time is the same all over the world.
      There are no confusing time zones or daylight savings time shifts to worry
      about.
    </p>

    <p>
      There are exactly 1,000 .Beats in a day, making each .Beat precisely 1
      minute and 26.4 seconds long.
    </p>

    <p>
      If you'd like to know how many .Beats are in a year, just multiply 365
      days by 1,000 beats/day to get 365,000 .Beats. Good luck figuring out how
      many seconds are in a year in your head.
    </p>

    <p>
      If you'd like to know more about .Beats, check out{" "}
      <a href="https://www.swatch.com/en_us/internet-time/">
        the official Swatch Internet Time page
      </a>{" "}
      and{" "}
      <a href="https://en.wikipedia.org/wiki/Swatch_Internet_Time">
        the Wikipedia page for Swatch Internet Time
      </a>
      . There's also a great podcast episode about this system:{" "}
      <a href="https://www.wnycstudios.org/podcasts/otm/articles/15-internet-time">
        On The Media #15 - Internet Time
      </a>
      . There's also a more pessimistic take at{" "}
      <a href="https://youtu.be/D1QMEYVE85o">
        Swatch .Beat - The Failure of Internet Time - Bad Ideas #64
      </a>
      .
    </p>
  </section>
));
