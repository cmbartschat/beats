import { component$, QRL, Slot, useSignal, useStore } from "@builder.io/qwik";

type IChoices = {
  choices: Array<[string, string, Array<string>]>;
};

const Choice = component$<{
  question: string;
  hint: string;
  choices: string[];
  onCorrect$: QRL<() => void>;
}>((props) => {
  const v = useSignal(() => 10000 * Math.random());
  const sorted = props.choices.map(
    ([e], i) => [(i * v.value + 5) % 10, i, e] as const,
  );
  sorted.sort(([o1], [o2]) => o1 - o2);
  const hintVisible = useSignal(false);
  const finished = useSignal(false);

  return (
    <div>
      <p>{props.question}</p>
      {sorted.map(([, i, e]) => (
        <button
          key={i}
          onClick$={() => {
            if (i === 0) {
              hintVisible.value = false;
              finished.value = true;
              props.onCorrect$();
            } else {
              hintVisible.value = true;
            }
          }}
          disabled={finished.value}
        >
          {e}
        </button>
      ))}
      {hintVisible.value && props.hint && <p>{props.hint}</p>}
    </div>
  );
});

export const Choices = component$<IChoices>((props) => {
  const store = useStore(
    () => ({
      finished: [] as number[],
    }),
    { deep: true },
  );

  return (
    <>
      {props.choices.map(([question, hint, choices], i) => (
        <Choice
          key={i}
          question={question}
          choices={choices}
          hint={hint}
          onCorrect$={() => store.finished.push(i)}
        />
      ))}

      {store.finished.length === props.choices.length && <Slot name="done" />}
      {/* <pre>{JSON.stringify(store, null, 2)}</pre> */}
    </>
  );
});
