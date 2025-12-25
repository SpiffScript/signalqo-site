type Env = {
  RESEND_API_KEY?: string;
  EMAIL_TO_CONTACT?: string;
  EMAIL_FROM_CONTACT?: string;
  TURNSTILE_SECRET_KEY?: string;
};

type PagesContext = {
  request: Request;
  env: Env;
};

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  try {
    const { request, env } = context;

    const RESEND_API_KEY = env.RESEND_API_KEY as string | undefined;
    const TO_EMAIL =
      (env.EMAIL_TO_CONTACT as string | undefined) ?? "support@signalqo.com";
    const FROM_EMAIL =
      (env.EMAIL_FROM_CONTACT as string | undefined) ??
      "SignalQo Support <support@signalqo.com>";
    const TURNSTILE_SECRET = env.TURNSTILE_SECRET_KEY as string | undefined;

    if (!RESEND_API_KEY) {
      return json(
        { ok: false, error: "Server not configured (missing RESEND_API_KEY)." },
        500
      );
    }
    if (!TURNSTILE_SECRET) {
      return json(
        {
          ok: false,
          error: "Server not configured (missing TURNSTILE_SECRET_KEY).",
        },
        500
      );
    }

    const body = (await request.json().catch(() => null)) as null | {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
      subject?: string;
      turnstileToken?: string;
      // optional honeypot
      website?: string;
    };

    if (!body) return json({ ok: false, error: "Invalid JSON." }, 400);

    // Honeypot: if filled, silently succeed (bot)
    if (body.website && body.website.trim().length > 0) {
      return json({ ok: true }, 200);
    }

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const message = (body.message ?? "").trim();
    const subject = (body.subject ?? "").trim();
    const turnstileToken = (body.turnstileToken ?? "").trim();

    if (name.length < 2) return json({ ok: false, error: "Name required." }, 400);

    const phoneDigits = phone.replace(/\D/g, "");
    const hasValidPhone = phoneDigits.length >= 10;
    const hasValidEmail = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email);

    if (!hasValidEmail && !hasValidPhone) {
      return json({ ok: false, error: "Email or phone required." }, 400);
    }

    if (message.length < 5) {
      return json({ ok: false, error: "Message required." }, 400);
    }

    if (!turnstileToken) {
      return json({ ok: false, error: "Missing security token." }, 400);
    }

    // Verify Turnstile server-side
    const ip = request.headers.get("CF-Connecting-IP") ?? undefined;

    const tsRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: TURNSTILE_SECRET,
          response: turnstileToken,
          ...(ip ? { remoteip: ip } : {}),
        }),
      }
    );

    const tsJson = (await tsRes.json()) as {
      success?: boolean;
      "error-codes"?: string[];
    };

    if (!tsJson?.success) {
      return json(
        {
          ok: false,
          error: "Security check failed. Please retry.",
          detail: tsJson?.["error-codes"]?.slice(0, 5),
        },
        400
      );
    }

    const emailSubject =
      subject.length > 0 ? `SignalQo Contact — ${subject}` : "SignalQo Contact";

    const text = `New contact message from SignalQo

Name: ${name}
Email: ${email || "(not provided)"}
Phone: ${phone || "(not provided)"}

Message:
${message}
`;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject: emailSubject,
        text,
        reply_to: email || undefined,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text().catch(() => "");
      return json(
        { ok: false, error: "Email send failed.", detail: errText.slice(0, 400) },
        502
      );
    }

    return json({ ok: true }, 200);
  } catch {
    return json({ ok: false, error: "Unexpected server error." }, 500);
  }
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
