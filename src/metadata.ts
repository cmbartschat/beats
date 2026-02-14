import type {
  DocumentHeadProps,
  DocumentHeadValue,
} from "@builder.io/qwik-city";

type SocialInfo = {
  title: string;
  description: string;
  image: string;
};

const socialPreview = (
  { title, image, description }: SocialInfo,
  base?: DocumentHeadValue,
) => {
  return (ctx: DocumentHeadProps) => {
    const imageUrl = new URL(image, ctx.url.origin).toString();
    return {
      ...base,
      title,
      meta: [
        ...(base?.meta || []),

        { name: "description", content: description },

        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: imageUrl },

        { name: "twitter:title", content: title },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: imageUrl },
      ],
    };
  };
};

export { socialPreview };
