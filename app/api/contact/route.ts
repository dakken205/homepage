import challengeRecaptcha from "@/app/services/challengeRecaptcha";
import sendMessage from "@/app/services/sendMessage";

export async function POST(req: Request) {
  const formData = await req.json();
  const { name, email, content, token } = formData;

  if (!token) {
    return Response.json(
      { error: "reCAPTCHA token is missing" },
      { status: 400 }
    );
  }

  try {
    const recaptchaRes = await challengeRecaptcha(token);
    const recaptchaReport = await recaptchaRes.json();
    if (!recaptchaReport.success) {
      return Response.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Failed to verify reCAPTCHA token", error);
    return Response.json(
      { error: "Failed to verify reCAPTCHA token" },
      { status: 500 }
    );
  }

  if (!name || !email || !content) {
    return Response.json({ error: "Invalid form data" }, { status: 400 });
  }

  try {
    const res = await sendMessage(name, email, content);
    if (res.ok) {
      return Response.json({ success: true }, { status: 200 });
    } else {
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }
  } catch (error) {
    console.error("Failed to send email", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
