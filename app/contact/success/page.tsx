import * as styles from "./page.css";

export default function Success() {
  return (
    <div className={styles.success}>
      <h2 className={styles.successTitle}>送信完了</h2>
      <p>お問い合わせありがとうございます。</p>
      <p>担当者が確認次第、連絡いたします。</p>
    </div>
  );
}
