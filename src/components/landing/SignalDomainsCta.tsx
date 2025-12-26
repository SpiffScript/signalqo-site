import React, { useEffect, useMemo, useRef, useState } from "react";
import Turnstile from "react-turnstile";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SignalDomainsCta({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  // useMemo hooks moved to the top to prevent Hook Order violations
  const title = useMemo(() => "What’s holding up progress?", []);
  const subtitle = useMemo(() => "We’ll start there.", []);

  const [details, setDetails] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileMsg, setTurnstileMsg] = useState("");

  const [turnstileMountId, setTurnstileMountId] = useState(0);

  useEffect(() => {
    if (!open) return;
    setTurnstileMountId((n) => n + 1);
  }, [open]);

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

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(
          data?.error ||
            "Couldn’t send right now. Please try again, or use the Contact page."
        );
        return;
      }

      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMsg(
        "Couldn’t send right now. Please try again, or use the Contact page."
      );
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Open a Conversation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="w-full max-w-[560px] rounded-[10px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] outline-none"
      >
        <div className="border-b border-slate-200 px-8 py-7">
          <div className="text-[10px] font-semibold tracking-[0.24em] text-slate-500">
            DIRECT LINE
          </div>
          <div className="mt-2 text-[26px] font-semibold leading-tight text-slate-900">
            {title}
          </div>
          <div className="mt-1 text-[16px] font-semibold text-slate-700">
            {subtitle}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-7">
          <div className="grid gap-5">
            <div>
              <div className="text-[12px] font-semibold tracking-[0.2em] text-slate-500">
                PRESSURE POINTS
              </div>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                className="mt-2 w-full resize-none rounded-md border border-slate-200 px-3 py-2 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
                placeholder="What’s getting in the way?"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-semibold tracking-[0.2em] text-slate-500">
                  FIRST NAME
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    placeholder="First"
                  />
                </label>
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-[0.2em] text-slate-500">
                  LAST NAME
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    placeholder="Last"
                  />
                </label>
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-[0.2em] text-slate-500">
                  EMAIL
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    placeholder="your@email.com"
                  />
                </label>
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-[0.2em] text-slate-500">
                  TELEPHONE
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    placeholder="(555) 000-0000"
                  />
                </label>
              </div>

              <div className="col-span-2">
                <label className="block text-[10px] font-semibold tracking-[0.2em] text-slate-500">
                  COMPANY
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    placeholder="Business Name"
                  />
                </label>
              </div>
            </div>

            {shouldShowTurnstile ? (
              <div className="mt-6">
                <div className="mb-2 text-[10px] text-slate-400">
                  Quick security check – then you’re in.
                </div>

                {turnstileMsg ? (
                  <div className="mb-2 text-[10px] text-slate-500">
                    {turnstileMsg}
                  </div>
                ) : null}

                <div onMouseDown={(e) => e.stopPropagation()}>
                  <Turnstile
                    key={`handraise-turnstile-${turnstileMountId}`}
                    sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY as string}
                    refreshExpired="auto"
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
              </div>
            ) : null}

            {status === "error" ? (
              <div className="mt-6 text-[11px] font-semibold text-rose-600">
                {errorMsg}
              </div>
            ) : null}

            {status === "sent" ? (
              <div className="mt-6 text-[11px] font-semibold text-emerald-600">
                Received. We’ll respond shortly.
              </div>
            ) : null}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
            <button
              type="button"
              onClick={handleClose}
              className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 hover:text-slate-700"
            >
              CANCEL
            </button>

            <button
              type="submit"
              disabled={!canSubmit}
              className="rounded-md bg-slate-900 px-5 py-2 text-[11px] font-semibold tracking-[0.2em] text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              TALK IT THROUGH
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
