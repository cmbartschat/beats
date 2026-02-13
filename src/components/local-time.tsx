import { component$, useContext } from "@builder.io/qwik";
import { TimeZoneContext } from "~/routes/time-zone";

const LocalTime = component$<{ date: Date | number; hasDecimal: boolean }>(
  (props) => {
    const zone = useContext(TimeZoneContext);

    return (
      <>
        {zone.value
          ? new Intl.DateTimeFormat(zone.value, {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: props.hasDecimal ? "numeric" : undefined,
              hour12: true,
            }).format(props.date)
          : "-"}
      </>
    );
  },
);
export { LocalTime };
