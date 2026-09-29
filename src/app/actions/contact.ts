"use server";

export type ContactState = {
  ok: boolean;
  submitted: boolean;
  error: string | null;
};

export async function submitEnquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return { ok: true, submitted: true, error: null };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2) {
    return { ok: false, submitted: false, error: "Please enter your name." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      ok: false,
      submitted: false,
      error: "Please enter a valid email address.",
    };
  }
  if (message.length < 12) {
    return {
      ok: false,
      submitted: false,
      error: "Please tell us a little more about what you need.",
    };
  }

  const payload = { name, email, phone, topic, message, sentAt: new Date().toISOString() };
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      return {
        ok: false,
        submitted: false,
        error: "We could not send that just now. Please email us directly.",
      };
    }
  } else {
    console.info("Enquiry received (no CONTACT_WEBHOOK_URL configured)", payload);
  }

  return { ok: true, submitted: true, error: null };
}
