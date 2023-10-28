import Link from "next/link";
import Result from "@/app/components/Result";
import { zen_kurenaido } from "@/app/font";
import * as styles from "./page.css";
import results from "./results.json";

export default function About() {
  return (
    <div className={styles.aboutRoot}>
      <div className={styles.backgroundGradient}>
        <section className={styles.visionRoot}>
          <p className={styles.eyebrow}>活動理念</p>
          <h2 className={styles.visionTitle}>
            データサイエンスのセミプロ集団へ
          </h2>
          <div className={styles.visionText}>
            <p>
              AI人材の育成が声高に叫ばれる昨今、兵庫県立大学は2021年度に社会情報科学部を新設しました。学生は日々の講義を通して、データサイエンスの基礎を学びます。
            </p>
            <p>
              一般社団法人データサイエンティスト協会によれば、データサイエンティストには「ビジネス力」「データサイエンス力」「データエンジニア力」が求められます。しかし現状を我々目線で考えると、学生の自主性に依存している部分も大きく、将来に危機感を抱かずにはいられません。
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
      </div>

      <section className={styles.informationRoot}>
        <h2 className={styles.informationTitle}>部活概要</h2>
        <table className={styles.informationTable}>
          <thead>
            <tr>
              <th>名称</th>
              <td>データ分析研究会</td>
            </tr>
            <tr>
              <th>創設</th>
              <td>2020年5月</td>
            </tr>
            <tr>
              <th>部活動認定</th>
              <td>2022年12月</td>
            </tr>
            <tr>
              <th>創設者</th>
              <td>新福一貴</td>
            </tr>
            <tr>
              <th>活動場所</th>
              <td>兵庫県立大学</td>
            </tr>
            <tr>
              <th>活動日時</th>
              <td>毎週木曜日 16:30~</td>
            </tr>
            <tr>
              <th>活動内容</th>
              <td>勉強会、コンペティション参加</td>
            </tr>
            <tr>
              <th>部員数</th>
              <td>約20名</td>
            </tr>
            <tr>
              <th>部長</th>
              <td>平野徳麻</td>
            </tr>
            <tr>
              <th>顧問</th>
              <td>
                <Link href="https://researchmap.jp/msasa">笹嶋宗彦</Link>、
                <Link href="https://researchmap.jp/ken_ishibashi">石橋健</Link>
              </td>
            </tr>
          </thead>
        </table>
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
