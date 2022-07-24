import {createComponent, mergeProps, ParentProps} from "solid-js";
import {Dynamic} from "solid-js/web";
import * as styles from "./Button.css";

export type ButtonProps = styles.ButtonProps;

export function Button(props: ParentProps<ButtonProps>) {
  let ref: HTMLButtonElement | undefined;

  const classes = () => [
    styles.buttonTheme,
    styles.button({theme: props.theme})
  ].join(" ");

  return createComponent(Dynamic, mergeProps({
    component: 'button',
    get class() {
      return classes()
    }
  }, props))
}
