import Link from "next/link";
import LeftArrow from "@/app/components/LeftArrow";
import * as styles from "./page.css";
import "github-markdown-css";

// unfortunately, getting metadata from the MDX file is not possible, https://stackoverflow.com/questions/75443992/next-js-13-app-directory-access-page-metadata-in-layout

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className={styles.detailRoot}>
      <Link className={styles.detailBack} href="/blog">
        <LeftArrow /> 一覧へ戻る
      </Link>
      <div className="markdown-body" style={{ backgroundColor: "initial" }}>
        {children}
      </div>
    </article>
  );
}
