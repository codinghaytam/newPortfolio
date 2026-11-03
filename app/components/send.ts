"use server";

export type SendResult = { ok: true } | { ok: false; error: string };

export async function send(formData: FormData): Promise<SendResult> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not set");
    return { ok: false, error: "The contact form is not configured." };
  }

  const payload = {
    access_key: accessKey,
    ...Object.fromEntries(formData),
  } as Record<string, unknown>;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || !result?.success) {
      console.error("Web3Forms submission failed", { status: response.status, result });
      return { ok: false, error: "Failed to send. Please try again or email me directly." };
    }
    return { ok: true };
  } catch (err) {
    console.error("Web3Forms request error", err);
    return { ok: false, error: "Failed to send. Please try again or email me directly." };
  }
}
