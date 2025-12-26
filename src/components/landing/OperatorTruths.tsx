import { Activity } from "lucide-react";

type Truth = {
  label: string;
  line: string;
};

function grainDataUri(): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220">
      <filter id="n">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      </filter>
      <rect width="220" height="220" filter="url(#n)" opacity="0.55"/>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function SignalMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <circle cx="12" cy="12" r="6.2" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />
    </svg>
  );
}

export default function OperatorTruths() {
  const truths: Truth[] = [
    { label: "Decision Velocity", line: "Progress shouldn’t take this long." },
    {
      label: "Leadership Bandwidth",
      line: "Your best thinking shouldn’t be consumed by noise.",
    },
    {
      label: "Management Consistency",
      line: "Standards shouldn’t depend on who’s working that day.",
    },
    {
      label: "Employee Retention",
      line: "Stability shouldn’t live in one person’s head.",
    },
    {
      label: "Operational Clarity",
      line: "You shouldn’t have to guess where risk lives.",
    },
    {
      label: "Execution Confidence",
      line: "Doing the right thing shouldn’t feel uncertain.",
    },
    {
      label: "Accountability Clarity",
      line: "Ownership shouldn’t be a guessing game.",
    },
    {
      label: "Margin Leakage",
      line: "Small leaks shouldn’t add up like this.",
    },
  ];

  const noiseUrl = grainDataUri();

  return (
    <aside className="h-full rounded-none border border-slate-200 bg-slate-50 shadow-sm">
      <div className="relative h-full rounded-none">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-none opacity-[0.1] mix-blend-multiply"
          style={{
            backgroundImage: `url("${noiseUrl}")`,
            backgroundRepeat: "repeat",
            backgroundSize: "220px 220px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-none opacity-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(241,245,249,0.85) 60%, rgba(241,245,249,1) 100%)",
          }}
        />
        <div className="relative p-6">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-sm border border-slate-200 bg-white p-2">
              <Activity className="h-5 w-5 text-slate-700" />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-slate-900">The Ringing</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                The background noise that never fully goes away.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {truths.map((t) => (
              <div key={t.label} className="flex gap-3">

                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-slate-900">
                  <SignalMark className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900">{t.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {t.line}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
