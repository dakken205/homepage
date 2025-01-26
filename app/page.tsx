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
        <div className={styles.introHeader}></div>
        <h1 className={`${styles.introTitle} ${styles.textGradient}`}>
          <p>
            DA研HPへ
            <wbr />
            ようこそ!
          </p>
        </h1>
        <div className={styles.introSubtitle}>
          <p>データ分析研究会(通称DA研)は兵庫県立大学の部活です。</p>
          <p>
            「<strong>データサイエンスのセミプロ集団へ</strong>
            」を合言葉に、勉強会の開催やコンペティションへの
            <wbr />
            参加等を通じて、日々技術力を高めています。
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
              「データサイエンティストに
              <wbr />
              求められるスキルセット」
            </Link>
            に基づき、以下の4つの部門に分かれて活動しています。
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
            <Link href="/department/cc" className={styles.activityCard}>
              <DataEngineeringAnimation />
              <div className={styles.activityCardTitle}>
                CC部門 / Content Create
              </div>
              <div className={styles.activityCardSubtitle}>
                データサイエンスの成果を様々な形で表現する。
              </div>
            </Link>
            <ActivityCardMini
              href="/department/biz#book-review-presentation"
              title="書評プレゼン"
              subTitle="書評とは、「本にツッコミを入れていく試行作業」です。本を読む人は良いアウトプットの場に、読まない人も良い読書週間のきっかけにしましょう。本読もうぜ！"
            />
            <ActivityCardMini
              href="/department/ds#machine-coder"
              title="Machine Coder"
              subTitle="隔週で開催されるテーブル形式の部内コンペです。データから「難破船から生存するか」「糖尿病を発症するか」などを予測し、その精度を競います。"
            />
            <ActivityCardMini
              href="/department/de#algorithm"
              title="AtCoder"
              subTitle="AtCoderをはじめ、数多くのプログラミングコンテストに参加します。論理思考や問題解決能力を養う上で非常に有益であると考えます。"
            />
            <ActivityCardMini
              href="/department/cc#movie"
              title="動画作成"
              subTitle="表現方法の基礎。色彩や形、3D空間のイロハを把握し実践する。"
            />
            <ActivityCardMini
              href="/department/biz#business-contest"
              title="ビジコン"
              subTitle="チームでアイデアを練り上げ、プレゼンテーションを行うことでビジネスプランを競います。ビジネスの実践的なスキルを磨き、創造力を発揮する絶好の機会です。目指せ学生賞！金稼ごうぜ！"
            />
            <ActivityCardMini
              href="/department/ds#kaggle"
              title="Kaggleコンペティション"
              subTitle="Kaggleは世界最大級のデータ分析のコンペティションサイトです。"
            />
            <ActivityCardMini
              href="/department/de#develop"
              title="Webアプリ開発"
              subTitle="プログラミングを通じて、データサイエンスの成果を可視化し、社会に還元する。"
            />
            <ActivityCardMini
              href="/department/cc#cg"
              title="CG作成"
              subTitle="レイトレーシングやボリュームレンダリング等を学び再現する。"
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
