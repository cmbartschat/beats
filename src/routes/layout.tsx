import { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async (ctx) => {
  console.log(ctx.url.pathname);
  await ctx.next();
};
