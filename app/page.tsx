import Link from "next/link";
import * as styles from "./page.css";

export default function Home() {
  return (
    <div className={styles.homeRoot}>
      <div className={styles.introRoot}>
        <h1 className={styles.introTitle}>DA研HPへようこそ!</h1>
        <div className={styles.introSubtitle}>
          <p>データ分析研究会(通称DA研)は兵庫県立大学の学生による部活です。</p>
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
      </div>
    </div>
  );
}
