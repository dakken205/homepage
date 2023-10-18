"use client";

// ts-ignore because experimental_useFormStatus is not in the types
// See https://github.com/vercel/next.js/issues/49232
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import * as styles from "./page.css";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className={styles.button} type="submit" aria-disabled={pending}>
      {pending ? "送信中..." : "送信する"}
    </button>
  );
}
