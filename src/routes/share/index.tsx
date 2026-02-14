import { RequestHandler } from "@builder.io/qwik-city";
import { dateToParsed } from "~/time";
import { stringifyTimestamp } from "~/timestamp";

export const onGet: RequestHandler = async (requestEvent) => {
  throw requestEvent.redirect(
    307,
    "/" + stringifyTimestamp(dateToParsed(new Date(), true)),
  );
};
