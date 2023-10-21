import Link from "next/link";
import * as styles from "../blog/page.css";

type ArticleProps = {
  path: string;
  date: string;
  title: string;
  content: string;
};

export default function Article({ path, date, title, content }: ArticleProps) {
  return (
    <article className={styles.post}>
      <div className={styles.stack}>
        <p className={styles.date}>{date}</p>
        <Link className={styles.title} href={`/blog/${path}`}>
          {title}
        </Link>
        <div className={styles.prose}>
          <p>{content}</p>
        </div>
      </div>
      <Link className={styles.readMore} href={`/blog/${path}`}>
        もっと読む
      </Link>
    </article>
  );
}
