import { createContextId, Signal } from "@builder.io/qwik";

const TimeZoneContext =
  createContextId<Signal<string | undefined>>("time-zone");

export { TimeZoneContext };
