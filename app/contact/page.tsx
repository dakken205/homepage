import Link from "next/link";
import { redirect } from "next/navigation";
import SubmitButton from "../components/submitButton";
import * as styles from "./page.css";

export default function Contact() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const data = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      content: formData.get("content")?.toString() ?? "",
    };

    const host =
      process.env.NODE_ENV === "development"
        ? "https://www.uoh-dakken.com"
        : "http://localhost:3000";
    const res = await fetch(new URL("/api/contact", host).toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      redirect("/contact/success");
    } else {
      console.error("Failed to send email", res);
    }
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} action={handleSubmit}>
        <div className={styles.stack}>
          <label className={styles.label} htmlFor="name">
            お名前
          </label>
          <input className={styles.input} type="text" id="name" name="name" />
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
