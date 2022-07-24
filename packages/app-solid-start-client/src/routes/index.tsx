import Counter from "~/components/Counter";
import "./index.css";
import {Button} from "ui-solid";

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Counter />
      <Button> Button </Button>
    </main>
  );
}
