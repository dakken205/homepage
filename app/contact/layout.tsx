import { ReCaptchaProvider } from "next-recaptcha-v3";

import * as styles from "./page.css";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <div className={styles.contact}>
        <h1 className={styles.contactTitle}>お問い合わせ</h1>
        {children}
      </div>
    </ReCaptchaProvider>
  );
}
