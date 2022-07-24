import { createSignal } from "solid-js";
import {buttonStyle} from "~/components/Counter.css";
import {rootVars} from "ui-solid";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button class={buttonStyle} onClick={() => setCount(count() + 1)}>
      Clicks: {count}
    </button>
  );
}
