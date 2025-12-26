import { useState, useMemo } from "react";
import {
  DOMAINS,
  type Domain,
  type DomainKey,
  type DomainNextLink,
} from "./SignalDomainsDetail";
import SignalDomainsCta from "./SignalDomainsCta";

type Props = {
  renderSpine?: boolean;
  spineExtendUpPx?: number;
};

type Row = { left?: Domain; right?: Domain };

export default function SignalDomainsMap({
  renderSpine = true,
  spineExtendUpPx = 140,
}: Props) {
  const [openKey, setOpenKey] = useState<DomainKey | null>(null);

  const rows = useMemo<Row[]>(() => {
    const r: Row[] = [];
    for (let i = 0; i < DOMAINS.length; i += 2) {
      r.push({ left: DOMAINS[i], right: DOMAINS[i + 1] });
    }
    return r;
  }, []);

  const toggle = (key: DomainKey) => setOpenKey((prev) => (prev === key ? null : key));
  const jumpNext = (toKey: DomainKey) => setOpenKey(toKey);

  const [handRaiseOpen, setHandRaiseOpen] = useState(false);
  const openHandRaise = () => setHandRaiseOpen(true);
  const closeHandRaise = () => setHandRaiseOpen(false);

  const handleExit = (link?: DomainNextLink) => {
  if (!link) return;

  if ("toKey" in link) {
    jumpNext(link.toKey);
  } else {
    openHandRaise();
  }
};

  return (
    <section className="w-full">
      <div className="relative w-full bg-gradient-to-b from-slate-50 to-white">
        {/* TEMP component spine; Delete me later */}
        {renderSpine && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-px bg-slate-200/40"
            style={{ top: -spineExtendUpPx, bottom: 0 }}
          />
        )}

        <div className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-20">
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[0.3em] uppercase text-slate-500">
              Full Flow Map
            </div>

            <h2 className="mt-3 text-3xl md:text-[40px] font-semibold text-slate-900">
              How pressure actually moves through a business
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Most operational problems don’t start where they show up.
            </p>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="space-y-10 md:space-y-12">
              {rows.map((row, idx) => {
                const left = row.left;
                const right = row.right;

                const leftOpen = !!left && openKey === left.key;
                const rightOpen = !!right && openKey === right.key;

                return (
                  <div key={idx} className="relative">

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 -translate-x-1/2"
                      style={{ top: 10 }}
                    >
                      <div className="relative flex items-center justify-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-white border border-slate-300" />

                        <span className="absolute -left-5 text-[11px] font-semibold text-slate-500">
                          {leftOpen ? "v" : "<"}
                        </span>

                        <span className="absolute -right-5 text-[11px] font-semibold text-slate-500">
                          {rightOpen ? "v" : ">"}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                      <div>
                        {left && (
                          <>
                            <button
                              type="button"
                              onClick={() => toggle(left.key)}
                              aria-expanded={leftOpen}
                              className="w-full text-left"
                            >
                              <div
                                className={[
                                  "text-lg md:text-xl text-slate-900",
                                  leftOpen ? "font-bold" : "font-semibold",
                                ].join(" ")}
                              >
                                {left.title}
                              </div>
                              <div className="mt-1 text-sm text-slate-500">
                                {left.subtitle}
                              </div>
                            </button>

                            <div
                              className={[
                                "overflow-hidden transition-[max-height,opacity] duration-200 ease-out",
                                leftOpen ? "max-h-[720px] opacity-100" : "max-h-0 opacity-0",
                              ].join(" ")}
                            >
                              <div className="mt-5 border border-slate-200 bg-white shadow-sm px-6 py-5 group">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <div>
                                    <div className="text-sm font-semibold text-slate-800">
                                      {left.pressureIntro}
                                    </div>
                                    <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-700">
                                      {left.pressurePoints.map((x) => (
                                        <li key={x}>{x}</li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div>
                                    <div className="text-sm font-bold text-slate-900">
                                      {left.focusIntro}
                                    </div>
                                    <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-700">
                                      {left.focusPoints.map((x) => (
                                        <li key={x}>{x}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                {left.nextLink && (
                                  <div className="mt-6 flex justify-end">
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleExit(left.nextLink);
                                      }}
                                      className={[
                                        "inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-slate-900",
                                        "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity",
                                      ].join(" ")}
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="h-2 w-2 rounded-full bg-slate-800/50"
                                      />
                                      {left.nextLink.label}
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      <div>
                        {right && (
                          <>
                            <button
                              type="button"
                              onClick={() => toggle(right.key)}
                              aria-expanded={rightOpen}
                              className="w-full text-right"
                            >
                              <div
                                className={[
                                  "text-lg md:text-xl text-slate-900",
                                  rightOpen ? "font-bold" : "font-semibold",
                                ].join(" ")}
                              >
                                {right.title}
                              </div>
                              <div className="mt-1 text-sm text-slate-500">
                                {right.subtitle}
                              </div>
                            </button>

                            <div
                              className={[
                                "overflow-hidden transition-[max-height,opacity] duration-200 ease-out",
                                rightOpen ? "max-h-[720px] opacity-100" : "max-h-0 opacity-0",
                              ].join(" ")}
                            >
                              <div className="mt-5 border border-slate-200 bg-white shadow-sm px-6 py-5 group">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <div>
                                    <div className="text-sm font-semibold text-slate-800">
                                      {right.pressureIntro}
                                    </div>
                                    <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-700">
                                      {right.pressurePoints.map((x) => (
                                        <li key={x}>{x}</li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div>
                                    <div className="text-sm font-bold text-slate-900">
                                      {right.focusIntro}
                                    </div>
                                    <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-700">
                                      {right.focusPoints.map((x) => (
                                        <li key={x}>{x}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                {right.nextLink && (
                                  <div className="mt-6 flex justify-end">
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleExit(right.nextLink);
                                      }}
                                      className={[
                                        "inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-slate-900",
                                        "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity",
                                      ].join(" ")}
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="h-2 w-2 rounded-full bg-slate-800/50"
                                      />
                                      {right.nextLink.label}
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <SignalDomainsCta open={handRaiseOpen} onClose={closeHandRaise} />
    </section>
  );
}
