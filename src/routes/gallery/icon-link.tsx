import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const IconLink = component$<{ href: string; favicon?: string }>(
  (props) => {
    const favicon = new URL(
      props.favicon || "/favicon.ico",
      props.href,
    ).toString();

    return (
      <Link href={props.href} class="default-link">
        <img src={favicon} alt="" width={16} height={16} /> <Slot />
      </Link>
    );
  },
);
