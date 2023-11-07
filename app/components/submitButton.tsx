"use client";

import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import * as styles from "../contact/page.css";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className={styles.button} type="submit" aria-disabled={pending}>
      {pending ? <Dots text={"送信中"} /> : "送信する"}
    </button>
  );
}

type DotsProps = {
  text: string;
};

const Dots = ({ text }: DotsProps) => {
  const [dots, setDots] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setDots((dots + 1) % 4);
    }, 400);
  });
  return <span>{text + ".".repeat(dots)}</span>;
};
