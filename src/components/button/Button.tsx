import { Slot, component$ } from "@builder.io/qwik";

import styles from "./styles.module.css";

const Button = component$(() => {
  return (
    <button class={styles.button}>
      <Slot />
    </button>
  );
});

export default Button;
