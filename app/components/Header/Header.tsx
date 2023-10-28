"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as styles from "./Header.css";

export default function Header() {
  const pathname = usePathname();

  type LinkButtonProps = {
    href: string;
    children: React.ReactNode;
  };

  const LinkButton = ({ href, children }: LinkButtonProps) => {
    return (
      <Link
        className={`${styles.navbarLink} ${
          pathname.startsWith(href) ? styles.current : ""
        } `}
        href={href}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLinks}>
          <div className={styles.stack}>
            <LinkButton
              href="/"
              children={
                <Image src="/logo.png" alt="" width={100} height={40} />
              }
            />
          </div>
          <LinkButton href="/about" children={<>DA研について</>} />
          <LinkButton href="/blog" children={<>ブログ</>} />
          <LinkButton href="/contact" children={<>お問い合わせ</>} />
        </div>
      </nav>
    </header>
  );
}
