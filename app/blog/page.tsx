import Article from "../components/Article";
import * as styles from "./page.css";

export default function Blog() {
  return (
    <div className={styles.blogRoot}>
      <h1 className={styles.text}>DakkensIO</h1>
      <div className={styles.posts}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
          <Article
            content={`これは日本語のサンプル記事です。<nobr></nobr>(htmlタグは解釈されないみたい)そういえばこの前、テスト文字列をまともな文章にしろという記事を見かけました。というのも、テスト文字列にうんこって文字を入れていたのを消し忘れてしまって、そのまま本番環境に表示されるって事件があったみたいなんです。私も気をつけたいと思います。`}
            date={`September ${i}th, 2023`}
            title={`Test Article No.${i}`}
            path={`${i}`}
            key={i}
          ></Article>
        ))}
      </div>
    </div>
  );
}
