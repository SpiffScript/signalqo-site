// SmallBigJobs.tsx Refined
import { useEffect, useMemo, useState } from "react";

type Props = {
  words?: string[];
  intervalMs?: number;
};

export default function SmallBigJobs({ words, intervalMs = 4200 }: Props) {
  const items = useMemo(
    () =>
      (words ?? [
        "full-time recruiter",
        "crisis manager",
        "chief firefighter",
        "conflict referee",
        "unpaid accountant",
        "systems architect",
      ]).map((w) => (w.trim().endsWith(".") ? w.trim() : `${w.trim()}.`)),
    [words]
  );

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "anim">("idle");
  const slideMs = 900;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhase("anim");
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setPhase("idle");
      }, slideMs);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [items.length, intervalMs]);

  const current = items[index];
  const next = items[(index + 1) % items.length];

  return (
    <section className="relative w-full bg-slate-100 overflow-hidden">
      {/* Design Spine */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center" aria-hidden="true">
        <div className="h-full w-px bg-slate-300/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-20">
        <div className="max-w-4xl text-left">
          {/* Sizing Fix: Dropped from 4xl/6xl to 3xl/5xl */}
          <div className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl space-y-2">
            <div className="leading-tight text-slate-800/60">You didn’t just open a business.</div>

            <div className="flex flex-wrap items-baseline gap-x-3 sm:pl-8">
              <span className="shrink-0 text-slate-900">You inherited a</span>

              <span className="sbj-wordwrap text-blue-600">
                <span className={`sbj-word py-1 ${phase === "anim" ? "sbj-up" : "sbj-still"}`}>
                  {current}
                </span>
                <span className={`sbj-word py-1 sbj-next ${phase === "anim" ? "sbj-up" : "sbj-still"}`}>
                  {next}
                </span>
              </span>
            </div>
          </div>

          {/* Sizing Fix: text-base for a cleaner secondary note */}
          <p className="mt-8 max-w-2xl text-base text-left leading-relaxed text-slate-600">
            The work and demands expand faster than the plan.
            <span className="block mt-2 font-medium text-slate-900">
              The “real job” gets buried under responsibilities you never asked for.
            </span>
          </p>
        </div>
      </div>

      <style>{`
        .sbj-wordwrap {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          height: 1.3em;
          line-height: 1.3em;
          overflow: hidden;
          vertical-align: top;
          min-width: 320px;
        }

        .sbj-word {
          display: block;
          white-space: nowrap;
          height: 1.3em;
          line-height: 1.3em;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .sbj-next {
          position: absolute;
          left: 0;
          top: 100%;
        }

        .sbj-still {
          transform: translateY(0);
        }

        .sbj-up {
          transform: translateY(-100%);
          transition: transform ${slideMs}ms cubic-bezier(0.45, 0, 0.55, 1);
        }

        @media (max-width: 640px) {
          .sbj-wordwrap {
            min-width: 100%;
            margin-top: 0.1em;
          }
        }
      `}</style>
    </section>
  );
}
