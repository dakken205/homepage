"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { useReCaptcha } from "next-recaptcha-v3";
import { redirect } from "next/navigation";
import SubmitButton from "../components/submitButton";
import * as styles from "./page.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const { executeRecaptcha } = useReCaptcha();
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const token = await executeRecaptcha("form_submit");

      const data = {
        name,
        email,
        content,
      };

      const host =
        process.env.NODE_ENV === "production"
          ? "https://www.uoh-dakken.com"
          : "http://localhost:3000";

      const res = await fetch(new URL("/api/contact", host).toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, token }),
      });

      console.log("res", res);

      if (res.ok) {
        redirect("/contact/success");
      }
    },
    [executeRecaptcha, name, email, content]
  );

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.stack}>
          <label className={styles.label} htmlFor="name">
            お名前
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles.stack}>
          <label className={styles.label} htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className={styles.stack}>
          <label className={styles.label} htmlFor="content">
            お問い合わせ内容 <span>*</span>
          </label>
          <textarea
            className={`${styles.textarea} ${styles.input}`}
            id="content"
            name="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            required
          />
        </div>
        <SubmitButton />
        <p className={styles.privacyText}>
          送信すると<Link href="/privacy-policy">プライバシーポリシー</Link>
          に同意したものとみなされます
        </p>
      </form>
    </div>
  );
}
