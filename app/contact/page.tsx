import Link from "next/link";
import * as styles from "./page.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contactTitle}>Contact</h1>
      <p className={styles.contactSubtitle}>お問い合わせ</p>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.stack}>
            <label className={styles.label} htmlFor="email">
              Email <span>*</span>
            </label>
            <input className={styles.input} type="text" id="email" required />
          </div>
          <div className={styles.stack}>
            <label className={styles.label} htmlFor="content">
              お問い合わせ内容 <span>*</span>
            </label>
            <textarea
              className={`${styles.textarea} ${styles.input}`}
              id="content"
              required
            />
          </div>
          <button className={styles.button}>送信</button>
          <p className={styles.privacyText}>
            送信すると<Link href="/privacy-policy">プライバシーポリシー</Link>
            に同意したものとみなされます
          </p>
        </form>
      </div>
    </div>
  );
}
