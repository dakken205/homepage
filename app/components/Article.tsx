import Link from "next/link";
import dynamic from "next/dynamic";
import * as styles from "../blog/(root)/page.css";
import "github-markdown-css";

type ArticleProps = {
  path: string;
  date: string;
  title: string;
};

export default function Article({ path, date, title }: ArticleProps) {
  const Component = dynamic(
    () => import(`@/app/blog/(article)/${path}/page.mdx`),
    {}
  );

  return (
    <article className={styles.post}>
      <div className={styles.stack}>
        <p className={styles.date}>{date}</p>
        <Link className={styles.title} href={`/blog/${path}`}>
          {title}
        </Link>
        <div className={`${styles.prose} markdown-body`}>
          <Component />
        </div>
      </div>
      <Link className={styles.readMore} href={`/blog/${path}`}>
        もっと読む
      </Link>
    </article>
  );
}

export function ArticleHeader() {}
