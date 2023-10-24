import * as styles from "./page.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.blog}>{children}</div>;
}
