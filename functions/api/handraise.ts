export const onRequestPost: PagesFunction = async (context) => {
  try {
    const { request, env } = context;

    const RESEND_API_KEY = env.RESEND_API_KEY as string | undefined;
    const TO_EMAIL =
    (env.EMAIL_TO_HANDRAISE as string | undefined) ?? "support@signalqo.com";

    const FROM_EMAIL =
    (env.EMAIL_FROM_HANDRAISE as string | undefined) ?? "SignalQo Support <support@signalqo.com>";
    const TURNSTILE_SECRET = env.TURNSTILE_SECRET_KEY as string | undefined;

    if (!RESEND_API_KEY) {
      return json({ ok: false, error: "Server not configured (missing RESEND_API_KEY)." }, 500);
    }
    if (!TURNSTILE_SECRET) {
      return json({ ok: false, error: "Server not configured (missing TURNSTILE_SECRET_KEY)." }, 500);
    }

    const body = await request.json().catch(() => null) as null | {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      company?: string;
      details?: string;
      turnstileToken?: string;
      // optional honeypot
      website?: string;
    };

    if (!body) return json({ ok: false, error: "Invalid JSON." }, 400);

    // Honeypot: if filled, silently succeed (bot)
    if (body.website && body.website.trim().length > 0) {
      return json({ ok: true }, 200);
    }

    const firstName = (body.firstName ?? "").trim();
    const lastName = (body.lastName ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const company = (body.company ?? "").trim();
    const details = (body.details ?? "").trim();
    const turnstileToken = (body.turnstileToken ?? "").trim();

    if (firstName.length < 2 || lastName.length < 2) {
      return json({ ok: false, error: "Name required." }, 400);
    }
    if (!turnstileToken) {
      return json({ ok: false, error: "Missing security token." }, 400);
    }
    if (email.length < 6 && phone.replace(/\D/g, "").length < 10) {
      return json({ ok: false, error: "Email or phone required." }, 400);
    }

    // Verify Turnstile server-side
    const ip = request.headers.get("CF-Connecting-IP") ?? undefined;

    const tsRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET,
        response: turnstileToken,
        ...(ip ? { remoteip: ip } : {}),
      }),
    });

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

    // Build email content
    const subject = `SignalQo Hand Raise — ${firstName} ${lastName}${company ? ` (${company})` : ""}`;
    const text =
`New hand raise from SignalQo

Name: ${firstName} ${lastName}
Email: ${email || "(not provided)"}
Phone: ${phone || "(not provided)"}
Company: ${company || "(not provided)"}

Pressure point:
${details || "(not provided)"}
`;

    // Send via Resend (simple REST call; no extra deps)
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject,
        text,
        // If user provided email, you can set reply_to so you can hit reply
        reply_to: email || undefined,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text().catch(() => "");
      return json({ ok: false, error: "Email send failed.", detail: errText.slice(0, 400) }, 502);
    }

    return json({ ok: true }, 200);
  } catch (err) {
    return json({ ok: false, error: "Unexpected server error." }, 500);
  }
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
