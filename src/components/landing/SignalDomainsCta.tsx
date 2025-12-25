import { useEffect, useRef, useState } from "react";
import Turnstile from "react-turnstile";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SignalDomainsCta({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Identity
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Contact
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Company
  const [company, setCompany] = useState("");

  // Context
  const [details, setDetails] = useState("");

  // Turnstile
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileMsg, setTurnstileMsg] = useState("");

  // Submit state
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
  }, [open]);

  if (!open) return null;

  /* ---------- Validation helpers ---------- */

  const normalizePhoneDigits = (v: string) => v.replace(/\D/g, "");

  const isValidName = (v: string) => {
    const s = v.trim();
    if (s.length < 2) return false;
    return /^[A-Za-z][A-Za-z\s'-]*$/.test(s);
  };

  const isValidEmail = (v: string) => {
    const s = v.trim();
    if (s.length < 6) return false;
    return /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(s);
  };

  const phoneDigits = normalizePhoneDigits(phone);
  const isValidPhone = phoneDigits.length >= 10;

  const shouldShowTurnstile =
    isValidName(firstName) &&
    isValidName(lastName) &&
    (isValidEmail(email) || isValidPhone);

  const canSubmit =
    shouldShowTurnstile && turnstileToken.length > 0 && status !== "sending";

  const handleClose = () => {
    setTurnstileToken("");
    setTurnstileMsg("");
    setStatus("idle");
    setErrorMsg("");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/handraise", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          company,
          details,
          turnstileToken,
        }),
      });

      const data = await res.json().catch(() => ({} as any));

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "Couldn’t send. Please try again.");
        return;
      }

      setStatus("sent");
      setTimeout(() => handleClose(), 700);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={handleClose}
        className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative w-full max-w-lg overflow-hidden rounded-sm bg-white shadow-2xl ring-1 ring-slate-200"
      >
        {/* Header */}
        <div className="bg-slate-50 px-8 py-6 border-b border-slate-100">
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">
            Direct Line
          </div>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900 tracking-tight">
            What’s holding up progress?
            <span className="block mt-1 text-xl font-semibold text-slate-700">
              We’ll start there.
            </span>
          </h3>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="relative">
            {/* Spine */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-3 top-0 h-full w-px bg-sky-500/25"
            />

            <div className="space-y-6 pl-7">
              {/* Pressure */}
              <label className="block">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Pressure point
                </span>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={3}
                  className="mt-2 w-full resize-none rounded-none border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-900"
                  placeholder="This helps us understand what you’re carrying."
                />
              </label>

              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    First name
                  </span>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1.5 w-full rounded-none border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-900"
                    placeholder="Jane"
                  />
                </label>

                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Last name
                  </span>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-1.5 w-full rounded-none border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-900"
                    placeholder="Doe"
                  />
                </label>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1.5 w-full rounded-none border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-900"
                    placeholder="jane@company.com"
                  />
                </label>

                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Phone
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    inputMode="tel"
                    className="mt-1.5 w-full rounded-none border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-900"
                    placeholder="(555) 000-0000"
                  />
                </label>
              </div>

              {/* Company */}
              <label className="block">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Company
                </span>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-1.5 w-full rounded-none border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-900"
                  placeholder="Business name"
                />
              </label>
            </div>
          </div>

          {shouldShowTurnstile ? (
            <div className="mt-6">
              <div className="mb-2 text-[10px] text-slate-400">
                Quick security check — then you’re in.
              </div>

              {turnstileMsg ? (
                <div className="mb-2 text-[10px] text-slate-500">
                  {turnstileMsg}
                </div>
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
              />
            </div>
          ) : null}

          {status === "error" ? (
            <div className="mt-6 text-[11px] font-semibold text-rose-600">
              {errorMsg}
            </div>
          ) : status === "sent" ? (
            <div className="mt-6 text-[11px] font-semibold text-emerald-700">
              Sent. We’ll reach out shortly.
            </div>
          ) : null}

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
            <button
              type="button"
              onClick={handleClose}
              className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!canSubmit}
              className={
                canSubmit
                  ? "rounded-none bg-slate-900 px-8 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg hover:bg-slate-800"
                  : "rounded-none bg-slate-100 px-8 py-3 text-xs font-bold uppercase tracking-[0.15em] text-slate-400 cursor-not-allowed"
              }
            >
              {status === "sending" ? "Sending…" : "Talk it through"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
