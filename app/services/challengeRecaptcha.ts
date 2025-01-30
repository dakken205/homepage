if (!process.env.RECAPTCHA_SECRET_KEY) {
  throw new Error("RECAPTCHA_SECRET_KEY is not set");
}

/**
 * challengeRecaptcha sends a request to the reCAPTCHA API to verify the token
 * @param token The reCAPTCHA token
 * @returns The response from the reCAPTCHA API
 */
export default function challengeRecaptcha(token: string) {
  return fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY as string,
      response: token,
    }).toString(),
  });
}
