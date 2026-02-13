import { component$ } from "@builder.io/qwik";
import { useRelativeDuration } from "~/duration";

const RelativeDuration = component$<{ date: number | Date; qualify: boolean }>(
  (props) => {
    const res = useRelativeDuration(props.date, props.qualify);
    return <>{res}</>;
  },
);
export { RelativeDuration };
