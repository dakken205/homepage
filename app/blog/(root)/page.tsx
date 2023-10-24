import Article from "../../components/Article";
import metadata from "../(article)/metadata";
import * as styles from "./page.css";

export default function Blog() {
  return (
    <div className={styles.blogRoot}>
      <h1 className={styles.text}>DakkensIO</h1>
      <div className={styles.posts}>
        {metadata.map((article, i) => (
          <Article
            path={article.path}
            date={dateFormat(article.date)}
            title={article.title}
            key={i}
          ></Article>
        ))}
      </div>
    </div>
  );
}

const dateFormat = (date: Date) => {
  const nthNumber = (number: number) => {
    return number > 0
      ? ["th", "st", "nd", "rd"][
          (number > 3 && number < 21) || number % 10 > 3 ? 0 : number % 10
        ]
      : "";
  };

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${month} ${day}${nthNumber(day)}, ${year}`;
};
