import * as styles from "./page.css";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contactTitle}>Contact</h1>
      <p className={styles.contactSubtitle}>お問い合わせ</p>
      {children}
    </div>
  );
}
