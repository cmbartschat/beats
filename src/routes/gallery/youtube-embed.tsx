import { component$ } from "@builder.io/qwik";

import styles from "./youtube-embed.module.scss";
import { Link } from "@builder.io/qwik-city";

export const YoutubeEmbed = component$<{ id: string; title: string }>(
  (props) => {
    const imageSource = `https://i.ytimg.com/vi/${props.id}/maxresdefault.jpg`;

    return (
      <Link href={"https://youtu.be/" + props.id} class={styles.youtubeEmbed}>
        <span class={styles.title}>{props.title}</span>
        <img
          width={1280}
          height={720}
          src={imageSource}
          alt="Video thumbnail"
        />
      </Link>
    );
  },
);
