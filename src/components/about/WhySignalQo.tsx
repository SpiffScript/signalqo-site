type Lane = {
  title: string;
  subtitle: string;
  looksLike: string[];
  work: string[];
  outcome: string;
};

const WHY: Lane = {
  title: "Why SignalQo exists",
  subtitle: "Because the business shouldn’t require constant personal intervention",
  looksLike: [
    "Everything escalates to the top",
    "You’re the default solver for too many problems",
    "Meetings happen — but decisions don’t land",
    "Standards drift unless you’re watching",
    "The same issues keep resurfacing with new names",
  ],
  work: [
    "Name the real constraints (not the loud ones)",
    "Clarify ownership and decision lanes",
    "Stabilize execution so quality holds under load",
    "Build simple operating rhythms that keep the system honest",
    "Reduce surprises by strengthening visibility upstream",
  ],
  outcome:
    "The operation gets quieter. Decisions move faster. The business starts carrying weight without collapsing inward.",
};

function LaneCard({ lane }: { lane: Lane }) {
  return (
    <div className="group border border-white/5 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900/80">
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
          {lane.title}
        </h3>
        <p className="text-sm font-medium text-white/40 uppercase tracking-widest">
          {lane.subtitle}
        </p>
      </div>

      <div className="mt-10 grid gap-12 md:grid-cols-2 relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />

        <div className="space-y-4">
          <p className="text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase">
            What this looks like
          </p>
          <ul className="space-y-3">
            {lane.looksLike.map((x) => (
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
            What we do about it
          </p>
          <ul className="space-y-3">
            {lane.work.map((x) => (
              <li
                key={x}
                className="group/item flex gap-3 text-[15px] leading-relaxed text-white/80 transition-transform duration-200 hover:scale-[1.02]"
              >
                <span className="font-bold text-blue-500/50 text-lg leading-none transition-colors duration-200 group-hover/item:text-green-400">
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
            Outcome:
          </span>
          <p className="text-[16px] font-medium leading-relaxed text-blue-100/90 italic">
            “{lane.outcome}”
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhySignalQo() {
  return (
    <section data-theme="dark-section" className="bg-black py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-400/85" />
            <span className="text-blue-400/85 font-mono text-xs tracking-[0.2em] uppercase font-bold">
              The point
            </span>
          </div>
          <p className="text-base leading-relaxed text-white/55 max-w-3xl">
            Most businesses don’t have a “people problem.” They have a signal problem.
            When signal is weak, everything costs more — time, morale, rework, and leadership attention.
          </p>
        </div>

        <LaneCard lane={WHY} />
      </div>
    </section>
  );
}
