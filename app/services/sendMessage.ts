if (!process.env.WEBHOOK_URL) {
  throw new Error("WEBHOOK_URL is not set");
}

/**
 * sendMessage sends a message to the specified webhook
 * @param name The name of the sender
 * @param email The email of the sender
 * @param content The content of the message
 * @returns The response from the webhook
 */
export default function sendMessage(
  name: string,
  email: string,
  content: string
) {
  return fetch(process.env.WEBHOOK_URL as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `下記内容でお問い合わせがありました。

- お問い合わせ日時: ${new Date().toLocaleString()}
- お名前: ${name || "未入力"}
- Email: ${email}
- お問い合わせ内容:
${content}

`,
    }),
  });
}
