import { component$, QRL, Slot, useSignal, useStore } from "@builder.io/qwik";

type IChoices = {
  choices: Array<[string, string, Array<string>, number]>;
};

const Choice = component$<{
  question: string;
  hint: string;
  choices: string[];
  correct: number;
  onCorrect$: QRL<() => void>;
  finished: boolean;
}>((props) => {
  const hintVisible = useSignal(0);

  return (
    <div>
      <p>{props.question}</p>
      {props.choices.map((e, i) => (
        <button
          key={i}
          onClick$={() => {
            if (i === props.correct) {
              hintVisible.value = 0;
              props.onCorrect$();
            } else {
              hintVisible.value++;
            }
          }}
          disabled={props.finished}
        >
          {e}
        </button>
      ))}
      {hintVisible.value > 0 && props.hint && (
        <p key={hintVisible.value}>{props.hint}</p>
      )}
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
      {props.choices.map(([question, hint, choices, correct], i) => (
        <Choice
          key={i}
          question={question}
          choices={choices}
          hint={hint}
          correct={correct}
          finished={store.finished.includes(i)}
          onCorrect$={() => store.finished.push(i)}
        />
      ))}

      {store.finished.length === props.choices.length && <Slot name="done" />}
      {/* <pre>{JSON.stringify(store, null, 2)}</pre> */}
    </>
  );
});
