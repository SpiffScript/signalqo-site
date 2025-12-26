import React, { useMemo, useState } from "react";
import Turnstile from "react-turnstile";

type ContactPayload = {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  preferredContact: "email" | "phone";
  topic: "general" | "services" | "partnership" | "speaking" | "other";
  website?: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email.trim());
}

export default function Contact() {
  const [form, setForm] = useState<ContactPayload>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    preferredContact: "email",
    topic: "general",
    website: "",
  });

  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactPayload, string>>
  >({});

  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [turnstileMsg, setTurnstileMsg] = useState<string>("");

  const canSubmit = useMemo(() => {
    if (submitState === "submitting") return false;
    if (!form.fullName.trim()) return false;
    if (!form.message.trim()) return false;
    if (!turnstileToken) return false;

    const hasEmail = form.email.trim() && isValidEmail(form.email);
    const hasPhone = (form.phone || "").trim().replace(/\D/g, "").length >= 10;

    if (!hasEmail && !hasPhone) return false;

    if (form.preferredContact === "phone" && !hasPhone) return false;
    if (form.preferredContact === "email" && !hasEmail) return false;

    return true;
  }, [form, submitState, turnstileToken]);

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => ({ ...prev, [key]: "" }));
    setErrorMsg("");
  }

  function validate(): boolean {
  const next: Partial<Record<keyof ContactPayload, string>> = {};
  const hasEmail = form.email.trim() && isValidEmail(form.email);
  const hasPhone = (form.phone || "").trim().replace(/\D/g, "").length >= 10;

    if (!form.fullName.trim()) next.fullName = "Enter your name.";

    if (!hasEmail && !hasPhone) {
      next.email = "Enter an email or phone number.";
    } else if (form.email.trim() && !isValidEmail(form.email)) {
      next.email = "Enter a valid email.";
    }

    if (form.preferredContact === "phone" && !hasPhone) {
      next.phone = "Phone is required if phone is preferred.";
    }

    if (form.preferredContact === "email" && !hasEmail) {
      next.email = "Email is required if email is preferred.";
    }

    if (!form.message.trim()) next.message = "Enter a message.";

    setFieldErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    if ((form.website || "").trim().length > 0) {
      setSubmitState("success");
      return;
    }

    if (!turnstileToken) {
      setSubmitState("error");
      setErrorMsg("Please complete the security check and try again.");
      return;
    }

    setSubmitState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.fullName.trim(),
          email: form.email.trim(),
          phone: (form.phone || "").trim() || undefined,
          message: form.message.trim(),
          subject: `${form.topic} (${form.preferredContact})`,
          website: (form.website || "").trim() || undefined,
          turnstileToken,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Request failed.");
      }

      setSubmitState("success");
      setTurnstileToken("");
      setTurnstileMsg("");
    } catch (err) {
      setSubmitState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
          <div className="mt-4 h-1 w-18 bg-blue-400/85" />
          <p className="mt-6 text-lg leading-relaxed text-white/50">
            Tell us what’s breaking down. We’ll respond with clarity and next steps – not generic advice.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="group border border-white/5 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900/80">
            <h2 className="text-2xl font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              What to include
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              The faster you can name the pressure point, the faster we can give you something useful.
            </p>

            <div className="mt-10 grid gap-12 md:grid-cols-2 relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />

              <div className="space-y-4">
                <p className="text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase">
                  The Pressure Point
                </p>
                <ul className="space-y-3">
                  {[
                    "Where things slow down or break under load",
                    "What’s getting escalated to you repeatedly",
                    "Where standards drift or execution gets inconsistent",
                    "What creates rework, frustration, or ambiguity",
                  ].map((x) => (
                    <li
                      key={x}
                      className="group/item flex gap-3 text-[15px] leading-relaxed text-white/60 transition-transform duration-200 hover:scale-[1.02]"
                    >
                      <span className="font-bold text-white/20 transition-colors duration-200 group-hover/item:text-red-400">
                        —
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <p className="text-[12px] font-bold tracking-[0.2em] text-blue-400/85 uppercase">
                  The Context
                </p>
                <ul className="space-y-3">
                  {[
                    "Team size and roles involved",
                    "What you’ve tried so far",
                    "What “fixed” looks like in 30–90 days",
                    "If this is urgent, say so directly",
                  ].map((x) => (
                    <li
                      key={x}
                      className="group/item flex gap-3 text-[15px] leading-relaxed text-white/80 transition-transform duration-200 hover:scale-[1.02]"
                    >
                      <span className="font-bold text-lg leading-none text-blue-500/50 transition-colors duration-200 group-hover/item:text-green-400">
                        →
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-white/5 pt-6">
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase mt-1">
                  Reply:
                </span>
                <p className="text-[16px] font-medium leading-relaxed text-blue-100/90 italic">
                  "Typically within one business day."
                </p>
              </div>
            </div>
          </div>

          <div className="border border-white/5 bg-slate-900 p-8">
            {submitState === "success" ? (
              <div className="py-8">
                <div className="text-sm font-medium rounded-none text-white/50 uppercase tracking-widest">
                  Message received
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  We’ll get back to you.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                  If you gave enough context, our reply will include concrete next steps.
                </p>

                <button
                  type="button"
                  className="mt-8 inline-flex w-full items-center justify-center bg-blue-500/90 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
                  onClick={() => {
                    setSubmitState("idle");
                    setForm({
                      fullName: "",
                      email: "",
                      phone: "",
                      company: "",
                      message: "",
                      preferredContact: "email",
                      topic: "general",
                      website: "",
                    });
                    setErrorMsg("");
                    setFieldErrors({});
                    setTurnstileToken("");
                    setTurnstileMsg("");
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    Send the situation
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/50">
                    A few details, then what’s happening.
                  </p>
                </div>

                <div className="hidden">
                  <label className="text-sm font-medium">Website</label>
                  <input
                    value={form.website}
                    onChange={(e) => update("website", e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-white/70">Full name</label>
                    <input
                      className="mt-1 w-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue-500/50"
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      placeholder="Pleasure to meet you"
                    />
                    {fieldErrors.fullName ? (
                      <div className="mt-1 text-xs text-red-400">{fieldErrors.fullName}</div>
                    ) : null}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white/70">Email</label>
                    <input
                      className="mt-1 w-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue-500/50"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="your@email.com"
                      inputMode="email"
                    />
                    {fieldErrors.email ? (
                      <div className="mt-1 text-xs text-red-400">{fieldErrors.email}</div>
                    ) : null}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white/70">Telephone</label>
                    <input
                      className="mt-1 w-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue-500/50"
                      value={form.phone || ""}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="(123) 456-7890"
                      inputMode="tel"
                    />
                    {fieldErrors.phone ? (
                      <div className="mt-1 text-xs text-red-400">{fieldErrors.phone}</div>
                    ) : null}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white/70">Company</label>
                    <input
                      className="mt-1 w-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue-500/50"
                      value={form.company || ""}
                      onChange={(e) => update("company", e.target.value)}
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-white/70">Topic</label>
                    <select
                      className="mt-1 w-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-blue-500/50"
                      value={form.topic}
                      onChange={(e) => update("topic", e.target.value as ContactPayload["topic"])}
                    >
                      <option value="general">General</option>
                      <option value="services">Services</option>
                      <option value="partnership">Partnership</option>
                      <option value="speaking">Speaking / Workshop</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white/70">Preferred contact</label>
                    <select
                      className="mt-1 w-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-blue-500/50"
                      value={form.preferredContact}
                      onChange={(e) =>
                        update(
                          "preferredContact",
                          e.target.value as ContactPayload["preferredContact"]
                        )
                      }
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-white/70">Message</label>
                  <textarea
                    className="mt-1 min-h-[150px] w-full resize-y border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue-500/50"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="What’s breaking down, where does it show up, and what outcome do you want?"
                  />
                  {fieldErrors.message ? (
                    <div className="mt-1 text-xs text-red-400">{fieldErrors.message}</div>
                  ) : null}
                </div>

                <div className="pt-2">
                  {turnstileMsg ? (
                    <div className="mb-2 text-xs text-white/50">{turnstileMsg}</div>
                  ) : null}

                  <Turnstile
                    sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY as string}
                    onVerify={(token) => {
                      setTurnstileToken(token);
                      setTurnstileMsg("");
                    }}
                    onExpire={() => {
                      setTurnstileToken("");
                      setTurnstileMsg("Expired — please retry.");
                    }}
                    onError={() => {
                      setTurnstileToken("");
                      setTurnstileMsg("Couldn’t verify — please retry.");
                    }}
                    appearance="interaction-only"
                    theme="dark"
                  />
                </div>

                {submitState === "error" ? (
                  <div className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {errorMsg || "Something went wrong. Please try again."}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="inline-flex w-full items-center justify-center bg-blue-500/90 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitState === "submitting" ? "Sending..." : "Send message"}
                </button>

                <div className="text-xs text-white/40 leading-relaxed">
                  By submitting, you’re agreeing to be contacted about your request. No spam. No list selling.
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
