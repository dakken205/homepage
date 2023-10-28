"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import * as styles from "./Header.css";

export default function Header() {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        {children}
      </Link>
    );
  };

  const onClickToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsFirstRender(false);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.navbarLinks}>
            <div className={styles.stack}>
              <LinkButton href="/">
                <Image
                  src="/logo-white.png"
                  alt="DA研ロゴ"
                  width={100}
                  height={40}
                />
              </LinkButton>
            </div>
            <div className={styles.navbarTextLinks}>
              <LinkButton href="/about">DA研について</LinkButton>
              <LinkButton href="/blog">ブログ</LinkButton>
              <LinkButton href="/contact">お問い合わせ</LinkButton>
            </div>
          </div>
          <button className={styles.menuButton} onClick={onClickToggle}>
            <div
              className={`${styles.menuToggle} ${
                isMenuOpen
                  ? styles.menuToggleOpen
                  : isFirstRender
                  ? ""
                  : styles.menuToggleClose
              }`}
            ></div>
          </button>
        </nav>
      </header>
      {isMenuOpen && (
        <div className={styles.menu}>
          <div className={styles.menuLinks}>
            <LinkButton href="/about">DA研について</LinkButton>
            <LinkButton href="/blog">ブログ</LinkButton>
            <LinkButton href="/contact">お問い合わせ</LinkButton>
          </div>
        </div>
      )}
    </>
  );
}
