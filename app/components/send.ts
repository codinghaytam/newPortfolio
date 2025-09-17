"use server";

export async function send(formData: FormData): Promise<void> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not set");
    return;
  }

  // Build payload from submitted form data on the server
  const payload = {
    access_key: accessKey,
    ...Object.fromEntries(formData),
  } as Record<string, unknown>;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  // Intentionally do not return a value; log for debugging only
  try {
    const result = await response.json();
    if (!response.ok || !result?.success) {
      console.error("Web3Forms submission failed", { status: response.status, result });
    }
  } catch (err) {
    console.error("Failed to parse Web3Forms response", err);
  }
}
