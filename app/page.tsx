import Link from "next/link";
import Image from "next/image";
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
        <div className={styles.department}>
          <h2 className={`${styles.departmentsTitle} ${styles.textGradient}`}>
            DA研の部門活動
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
            <Link href="/department/biz" className={styles.activityCard}>
              <BusinessAnimation />
              <div className={styles.activityCardTitle}>
                Biz部門 / Business Problem Solving
              </div>
              <div className={styles.activityCardSubtitle}>
                課題背景を理解した上で、ビジネス課題を整理し、解決する。
              </div>
            </Link>
            <Link href="/departments/ds" className={styles.activityCard}>
              <DataScienceAnimation />
              <div className={styles.activityCardTitle}>
                DS部門 / Data Science
              </div>
              <div className={styles.activityCardSubtitle}>
                情報処理、人工知能、統計学などの情報科学系の知恵を理解し、データ分析に応用する。
              </div>
            </Link>
            <Link href="/department/de" className={styles.activityCard}>
              <DataEngineeringAnimation />
              <div className={styles.activityCardTitle}>
                DE部門 / Data Engineering
              </div>
              <div className={styles.activityCardSubtitle}>
                データサイエンスを意味のある形に使えるようにし、実装、運用する。
              </div>
            </Link>
            <ActivityCardMini
              href="/department/biz#cambria"
              title="カンブリア宮殿の同時視聴"
              subTitle="日経スペシャル カンブリア宮殿を毎週視聴します。視聴の後は、ビジネスの視点からディスカッションを行います。"
            />
            <ActivityCardMini
              href="/department/ds#machine-coder"
              title="Machine Coder"
              subTitle="隔週で開催されるテーブル形式の部内コンペです。データから「難破船から生存するか」「糖尿病を発症するか」などを予測し、その精度を競います。"
            />
            <ActivityCardMini
              href="/department/de#algorithm"
              title="AtCoder / アルゴリズム勉強会"
              subTitle="AtCoderをはじめ、数多くのプログラミングコンテストに参加します。論理思考や問題解決能力を養う上で非常に有益であると考えます。"
            />
            <ActivityCardMini
              href="/department/biz#promotion"
              title="販促コンペ"
              subTitle=""
            />
            <ActivityCardMini
              href="/department/ds#kaggle"
              title="Kaggleコンペティション"
              subTitle="Kaggleは世界最大級のデータ分析のコンペティションサイトです。"
            />
            <ActivityCardMini
              href="/department/de#develop"
              title="Webアプリ開発"
              subTitle="多くの人に感動を与えるアプリを作りましょう。"
            />
          </div>
        </div>
      </section>

      <section className={styles.featuresRoot}>
        <div className={styles.featuresMain}>
          <h2 className={`${styles.featuresTitle} ${styles.textGradient}`}>
            DA研はこんな方におすすめです
          </h2>
          <div className={styles.features}>
            <ul>
              <li>
                ✓ 講義を受講しているだけでデータサイエンティストになれるか不安
              </li>
              <li>✓ 情報共有／切磋琢磨できる仲間がほしい</li>
              <li>
                ✓ 実務や団体コンペ等を通して、より実践的な学びの機会を得たい
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.promotionRoot}>
        <h3 className={`${styles.promotionTitle} ${styles.textGradient}`}>
          部門の枠を超えた活動
        </h3>
        <div className={styles.promotions}>
          <div className={styles.promotionsStack}>
            <Link
              href="https://twitter.com/dakken205/status/1716673143782396258"
              target="_blank"
              className={styles.promotionCard}
            >
              <Image
                width={350}
                height={270}
                src="/promotions/01.jpeg"
                alt="商大歳2023 DA研ポスター"
              ></Image>
            </Link>
            <Link
              href="https://twitter.com/dakken205/status/1694397857271628051"
              target="_blank"
              className={styles.promotionCard}
            >
              <Image
                width={350}
                height={400}
                src="/promotions/02.jpeg"
                alt="DA研2023 夏合宿 1日目"
              ></Image>
            </Link>
          </div>
          <div className={styles.promotionsStack}></div>
        </div>
      </section>
    </div>
  );
}

type ActivityCardProps = {
  href: string;
  title: string;
  subTitle: string;
};

function ActivityCardMini({ href, title, subTitle }: ActivityCardProps) {
  return (
    <Link className={styles.activityCardMini} href={href}>
      <div className={styles.activityCardTitle}>{title}</div>
      <div className={styles.activityCardSubtitle}>{subTitle}</div>
    </Link>
  );
}
