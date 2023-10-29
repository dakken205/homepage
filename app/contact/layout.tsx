import * as styles from "./page.css";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contactTitle}>お問い合わせ</h1>
      {children}
    </div>
  );
}
