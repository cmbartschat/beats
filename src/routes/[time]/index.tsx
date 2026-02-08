import { component$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import Footer from "~/components/footer";
import Nav from "~/components/nav";

export default component$(() => {
  const location = useLocation();

  const time = location.params.time;
  const parsed = time.startsWith("@") ? parseFloat(time.slice(1)) : null;

  return (
    <>
      <Nav />
      {parsed && <div>@{parsed}</div>}
      <Footer />
    </>
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
