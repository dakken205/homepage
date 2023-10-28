import { zen_kurenaido } from "@/app/font";
import * as styles from "./page.css";
import Result from "@/app/components/Result";
import results from "./results.json";

export default function About() {
  return (
    <div className={styles.aboutRoot}>
      <section className={styles.visionRoot}>
        <p className={styles.eyebrow}>活動理念</p>
        <h2 className={styles.visionTitle}>データサイエンスのセミプロ集団へ</h2>
        <div className={styles.visionText}>
          <p>
            AI人材の育成が声高に叫ばれる昨今、兵庫県立大学は2021年度に社会情報科学部を新設しました。学生は日々の講義を通して、データサイエンスの基礎を学びます。
          </p>
          <p>
            一般社団法人データサイエンティスト協会によれば、データサイエンティストには「ビジネス力」「データサイエンス力」「データエンジニア力」が求められます。しかし現状を学生目線で考えると、我々の自主性に依存している部分も大きく、将来に危機感を抱かずにはいられません。
          </p>
          <p>
            そんな懸念を払拭すべく、データ分析研究会は勉強会やコンペティション参加等を通じ、データサイエンティストのセミプロを目指し日々邁進してまいります。我々一人ひとり技術が、日本社会の一助となることを願って。
          </p>
          <div className={styles.visionSignature}>
            データ分析研究会 部長
            <span className={zen_kurenaido.className}>平野徳麻</span>
          </div>
        </div>
      </section>

      <section className={styles.resultsRoot}>
        <h2 className={styles.resultsTitle}>活動実績</h2>
        <div className={styles.results}>
          {results["results"].map((result, i) => {
            return (
              <Result
                date={result.date}
                title={result.title}
                children={result.content}
                key={i}
              ></Result>
            );
          })}
        </div>
      </section>
    </div>
  );
}
