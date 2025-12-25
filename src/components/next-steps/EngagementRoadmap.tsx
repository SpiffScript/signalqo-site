type Phase = {
  phase: string;
  timing: string;
  title: string;
  looksLike: string[];
  weDo: string[];
  youGet: string[];
};

const PHASES: Phase[] = [
  {
    phase: "Phase 1",
    timing: "Week 0–1",
    title: "Signal Scan",
    looksLike: [
      "Things feel busy, but progress is inconsistent",
      "The same problems keep resurfacing",
      "Everything escalates to leadership",
    ],
    weDo: [
      "Isolate the real constraints (not the loud ones)",
      "Map decision friction and ownership gaps",
      "Identify where execution breaks under load",
    ],
    youGet: [
      "Signal Snapshot (clear constraints + priorities)",
      "Immediate focus recommendation",
      "A short list of “stop doing this” items",
    ],
  },
  {
    phase: "Phase 2",
    timing: "Week 1–2",
    title: "Alignment & Decision Lanes",
    looksLike: [
      "Managers are capable but inconsistent",
      "Expectations aren’t landing cleanly",
      "Important decisions get revisited too often",
    ],
    weDo: [
      "Clarify ownership, roles, and decision lanes",
      "Set standards that are teachable and enforceable",
      "Install a simple operating rhythm (meetings that work)",
    ],
    youGet: [
      "Decision map (who decides what)",
      "Operating cadence (weekly structure)",
      "Rules of engagement for execution",
    ],
  },
  {
    phase: "Phase 3",
    timing: "Weeks 2–6",
    title: "Execution Stabilization",
    looksLike: [
      "Rework loops (same work done twice)",
      "Quality drifts unless watched",
      "Small misses become big fires",
    ],
    weDo: [
      "Stabilize the repeatable work first",
      "Reduce rework through clarity + inspection points",
      "Build light SOPs only where needed",
    ],
    youGet: [
      "Stabilized workflows for recurring pain points",
      "Simple scoreboards (visibility without micromanagement)",
      "Accountability pattern managers can run",
    ],
  },
  {
    phase: "Phase 4",
    timing: "Weeks 6–12",
    title: "Reinforcement & Independence",
    looksLike: [
      "The system works… until pressure hits",
      "Backsliding when leadership attention shifts",
      "Managers need reinforcement to hold the line",
    ],
    weDo: [
      "Pressure-test the rhythm and standards",
      "Tighten weak ownership or decision edges",
      "Transition to ongoing advisory only if it makes sense",
    ],
    youGet: [
      "Leader playbook for maintaining signal",
      "A clean handoff plan",
      "Optional ongoing cadence (light, focused)",
    ],
  },
];

function PhaseCard({ p }: { p: Phase }) {
  return (
    <div className="group border border-white/5 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900/80">
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-blue-400/85 font-mono text-xs tracking-[0.2em] uppercase font-bold">
              {p.phase}
            </span>
            <span className="text-white/30 text-xs font-semibold uppercase tracking-widest">
              {p.timing}
            </span>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            {p.title}
          </h3>
        </div>

        <div className="hidden sm:block">
          <div className="h-10 w-10 border border-white/10 bg-white/5 flex items-center justify-center rounded-sm">
            <span className="text-white/40 font-mono text-sm">{p.phase.replace("Phase ", "")}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-3 relative">
        <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-white/5" />
        <div className="hidden lg:block absolute left-2/3 top-0 bottom-0 w-px bg-white/5" />

        <div>
          <p className="text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase">
            What this looks like
          </p>
          <ul className="mt-5 space-y-3">
            {p.looksLike.map((x) => (
              <li key={x} className="flex gap-3 text-[15px] leading-relaxed text-white/60">
                <span className="font-bold text-white/20">—</span>
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[12px] font-bold tracking-[0.2em] text-blue-400/85 uppercase">
            What we do
          </p>
          <ul className="mt-5 space-y-3">
            {p.weDo.map((x) => (
              <li key={x} className="flex gap-3 text-[15px] leading-relaxed text-white/80">
                <span className="font-bold text-blue-500/50 text-lg leading-none">→</span>
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase">
            What you get
          </p>
          <ul className="mt-5 space-y-3">
            {p.youGet.map((x) => (
              <li key={x} className="flex gap-3 text-[15px] leading-relaxed text-white/70">
                <span className="font-bold text-white/25">+</span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function EngagementRoadmap() {
  return (
    <section data-theme="dark-section" className="bg-black py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 w-px h-full bg-white/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-400/85" />
            <span className="text-blue-400/85 font-mono text-xs tracking-[0.2em] uppercase font-bold">
              Engagement roadmap
            </span>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tight text-white">
            The path to <span className="text-blue-400">predictable</span> execution
          </h2>

          <p className="mt-6 text-xl text-white/60 leading-relaxed border-l-4 border-white/10 pl-6">
            This is the typical sequence. We keep it flexible — but we don’t skip steps.
            If you try to “implement” before signal is clear, you just scale confusion.
          </p>
        </div>

        <div className="space-y-6">
          {PHASES.map((p) => (
            <PhaseCard key={p.phase} p={p} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-35">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-slate-700/20 blur-3xl" />
      </div>
    </section>
  );
}
