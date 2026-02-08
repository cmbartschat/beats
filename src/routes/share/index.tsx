import { RequestHandler } from "@builder.io/qwik-city";
import { timeToBeat } from "~/time";

export const onGet: RequestHandler = async (requestEvent) => {
  throw requestEvent.redirect(
    307,
    "/" + "@" + Math.floor(timeToBeat(new Date())),
  );
};
