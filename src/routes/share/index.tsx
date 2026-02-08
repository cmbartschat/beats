import { RequestHandler } from "@builder.io/qwik-city";
import { dateToBeat } from "~/time";

export const onGet: RequestHandler = async (requestEvent) => {
  throw requestEvent.redirect(
    307,
    "/" + "@" + Math.floor(dateToBeat(new Date())),
  );
};
