import Counter from "~/components/Counter";
import "./index.css";
import {Button} from "ui-solid";

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Counter />

      <Button  theme={'primary'}>Test</Button>
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
