import Link from "next/link";
import Image from "next/image";
import * as styles from "./Header.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLinks}>
          <div className={styles.stack}>
            <Link href="/">
              <Image src="/logo.png" alt="" width={100} height={40} />
            </Link>
          </div>
          <Link className={styles.navbarLink} href="/about">
            DA研について
          </Link>
          <Link className={styles.navbarLink} href="/blog">
            ブログ
          </Link>
          <Link className={styles.navbarLink} href="/contact">
            お問い合わせ
          </Link>
        </div>
      </nav>
    </header>
  );
}
