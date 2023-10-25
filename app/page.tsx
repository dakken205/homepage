import Link from "next/link";
import * as styles from "./page.css";
import {
  BusinessAnimation,
  DataScienceAnimation,
  DataEngineeringAnimation,
} from "./components/DepartmentAnimations";

export default function Home() {
  return (
    <div className={styles.homeRoot}>
      <main className={styles.introRoot}>
        <h1 className={`${styles.introTitle} ${styles.textGradient}`}>
          DA研HPへようこそ!
        </h1>
        <div className={styles.introSubtitle}>
          <p>データ分析研究会(通称DA研)は兵庫県立大学の部活です。</p>
          <p>
            「<strong>データサイエンスのセミプロ集団へ</strong>
            」を合言葉に、勉強会の開催やコンペティションへの参加等を通じて、日々技術力を高めています。
          </p>
        </div>
        <div className={styles.introButtons}>
          <Link
            className={`${styles.introButtonBase} ${styles.introWhiteButton}`}
            href="/about"
          >
            DA研を知る
          </Link>
          <Link
            className={`${styles.introButtonBase} ${styles.introBlackButton}`}
            href="/contact"
          >
            DA研に入る
          </Link>
        </div>
      </main>
      <section className={styles.departmentsRoot}>
        <h2 className={`${styles.departmentsTitle} ${styles.textGradient}`}>
          DA研の部門構成
        </h2>
        <p className={styles.departmentsSubtitle}>
          弊部では、一般社団法人データサイエンティスト協会が定める
          <Link
            href="https://www.datascientist.or.jp/dssjournal/2021/07/16/dodv17/"
            target="_blank"
          >
            「データサイエンティストに求められるスキルセット」
          </Link>
          に基づき、以下の3つの部門に分かれて活動しています。
        </p>
        <div className={styles.departmentsGrid}>
          <div>
            <Link href="/department/biz" className={styles.featureCard}>
              <BusinessAnimation />
              <div className={styles.featureCardTitle}>
                Biz部門 / Business Problem Solving
              </div>
              <div className={styles.featureCardSubtitle}>
                課題背景を理解した上で、ビジネス課題を整理し、解決する。
              </div>
            </Link>
          </div>
          <div>
            <Link href="/departments/ds" className={styles.featureCard}>
              <DataScienceAnimation />
              <div className={styles.featureCardTitle}>
                DS部門 / Data Science
              </div>
              <div className={styles.featureCardSubtitle}>
                情報処理、人工知能、統計学などの情報科学系の知恵を理解し、データ分析に応用する。
              </div>
            </Link>
          </div>
          <div>
            <Link href="/department/de" className={styles.featureCard}>
              <DataEngineeringAnimation />
              <div className={styles.featureCardTitle}>
                DE部門 / Data Engineering
              </div>
              <div className={styles.featureCardSubtitle}>
                データサイエンスを意味のある形に使えるようにし、実装、運用する。
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
