import {
  component$,
  Slot,
  useContextProvider,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { TimeZoneContext } from "./time-zone";

export default component$(() => {
  const timeZone = useSignal<string | undefined>(undefined);
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    timeZone.value = "default";
  });
  useContextProvider(TimeZoneContext, timeZone);
  return <Slot />;
});
