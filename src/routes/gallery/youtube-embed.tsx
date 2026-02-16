import { component$ } from "@builder.io/qwik";

import styles from "./youtube-embed.module.scss";
import { Link } from "@builder.io/qwik-city";

export const YoutubeEmbed = component$<{ id: string; title: string }>(
  (props) => {
    const imageSource = `https://i.ytimg.com/vi_webp/${props.id}/640.webp`;

    return (
      <Link href={"https://youtu.be/" + props.id} class={styles.youtubeEmbed}>
        <span class={styles.title}>{props.title}</span>
        <img width={640} height={480} src={imageSource} alt="Video thumbnail" />
      </Link>
    );
  },
);
