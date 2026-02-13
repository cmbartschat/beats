import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { TimeZoneContext } from "~/routes/time-zone";

const getGoogleTimestamp = (date: Date) =>
  `${String(date.getFullYear()).padStart(4, "0")}\
${String(date.getMonth() + 1).padStart(2, "0")}\
${String(date.getDate()).padStart(2, "0")}T\
${String(date.getHours()).padStart(2, "0")}\
${String(date.getMinutes()).padStart(2, "0")}00`;

const GoogleCalendarLink = component$<{ date: Date }>((props) => {
  const timeZone = useContext(TimeZoneContext);
  const afterHour = new Date(props.date);
  afterHour.setHours(afterHour.getHours() + 1);

  const params =
    timeZone.value &&
    new URLSearchParams({
      text: "Event",
      dates:
        getGoogleTimestamp(props.date) + "/" + getGoogleTimestamp(afterHour),
    });

  return (
    <>
      {params && (
        <Link
          class="shiny-button"
          href={
            "https://calendar.google.com/calendar/u/0/r/eventedit?" + params
          }
        >
          Add to Google Calendar
        </Link>
      )}
    </>
  );
});

export { GoogleCalendarLink };
