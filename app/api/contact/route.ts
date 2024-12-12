export async function POST(req: Request) {
  const formData = await req.json();
  const { name, email, content } = formData;
  if (!name || !email || !content) {
    return Response.json({ error: "Invalid form data" }, { status: 400 });
  }

  const target = process.env.WEBHOOK_URL;
  if (!target) {
    return Response.json({ error: "Webhook URL is not set" }, { status: 500 });
  }

  const res = await fetch(target, {
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

  if (res.ok) {
    return Response.json({ success: true }, { status: 200 });
  } else {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
