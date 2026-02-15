import { component$, QRL, Slot, useSignal, useStore } from "@builder.io/qwik";

type IMatching = {
  pairs: Array<[string, string]>;
};

const MatchColumn = component$<{
  selected: number;
  values: Array<[string, boolean]>;
  onSelect$: QRL<(i: number) => void>;
}>((props) => {
  const v = useSignal(() => 10000 * Math.random());
  const sorted = props.values.map(
    ([e, d], i) =>
      [(i * v.value + 5) % 10, i, e, i === props.selected, d] as const,
  );
  sorted.sort(([o1], [o2]) => o1 - o2);

  return (
    <div>
      {sorted.map(([, i, e, s, d]) => (
        <button
          key={i}
          onClick$={() => props.onSelect$(s ? -1 : i)}
          disabled={d}
          aria-pressed={s}
        >
          {e}
          {s ? " selected" : ""}
        </button>
      ))}
    </div>
  );
});

export const Matching = component$<IMatching>((props) => {
  const store = useStore(
    () => ({
      hintVisible: false,
      matched: [] as number[],
      leftSelected: -1,
      rightSelected: -1,
    }),
    { deep: true },
  );

  return (
    <>
      <MatchColumn
        values={props.pairs.map((e, i) => [e[0], store.matched.includes(i)])}
        selected={store.leftSelected}
        onSelect$={(v) => {
          if (store.rightSelected >= 0) {
            if (v === store.rightSelected) {
              store.rightSelected = -1;
              store.matched.push(v);
            } else {
              store.hintVisible = true;
              store.rightSelected = -1;
            }
          } else {
            store.leftSelected = v;
          }
        }}
      />
      with
      <MatchColumn
        values={props.pairs.map((e, i) => [e[1], store.matched.includes(i)])}
        selected={store.rightSelected}
        onSelect$={(v) => {
          if (store.leftSelected >= 0) {
            if (v === store.leftSelected) {
              store.leftSelected = -1;
              store.matched.push(v);
            } else {
              store.hintVisible = true;
              store.leftSelected = -1;
            }
          } else {
            store.rightSelected = v;
          }
        }}
      />
      {store.hintVisible && <Slot name="hint" />}
      {store.matched.length === props.pairs.length && <Slot name="done" />}
      {/* <pre>{JSON.stringify(store, null, 2)}</pre> */}
    </>
  );
});
