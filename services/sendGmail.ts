import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";

export default async function sendGmail(data: {
  name: string;
  email: string;
  content: string;
}) {
  const transporter = createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  });

  const res = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_MAIL_USER,
    to: data.email,
    subject: "【データ分析研究会】お問い合わせありがとうございます",
    text: makeText(data.name, data.email, data.content),
  });

  const ok = res.response.startsWith("250") || res.response.startsWith("354");
  return NextResponse.json({ ok });
}

const makeText = (name: string, email: string, content: string) => `
※これはシステムからの自動生成メールです

${name && `${name} 様\n`}
この度はデータ分析研究会へお問い合わせいただき、誠にありがとうございます。
下記の内容でお問い合わせを受け付けました。

━━━━━━━━ お問い合わせ内容 ━━━━━━━
お名前: ${name || "未入力"}
e-mail: ${email}

お問い合わせ内容:
${content}
━━━━━━━━━━━━━━━━━━━━━━━━

近日中に担当者が確認し次第、ご連絡いたします。
お問い合わせの内容によっては、お時間をいただく場合がございます。あらかじめご了承ください。

※このメールに心当たりのない方は、お手数ですが下記までご連絡ください


••---------------------------------------------------
データ分析研究会

〒651-2197 神戸市西区学園西町8丁目2-1
TEL: xxx-xxxx-xxxx
e-mail: xxx@example.com
URL: https://www.uoh-dakken.com/
---------------------------------------------------••✼
`;
