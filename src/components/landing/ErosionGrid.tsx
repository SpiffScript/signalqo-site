type ErosionIssue = {
  title: string;
  premise: string;
  effect: string;
  approach: string;
  focus: string;
};

const issues: ErosionIssue[] = [
  {
    title: "You fix the same issue more than once",
    premise: "You handle the problem and it improves, but then it resurfaces in a slightly different form.",
    effect: "This creates a cycle of 'whack-a-mole' management that drains leadership energy.",
    approach: "We isolate the systemic flaw rather than patching the symptom.",
    focus: "Root cause clarity",
  },
  {
    title: "Good people, uneven results",
    premise: "The team is talented and cares deeply, yet outcomes fluctuate based on who is on shift.",
    effect: "Quality becomes dependent on individual heroics rather than repeatable structure.",
    approach: "We build standards that hold even when you aren't watching.",
    focus: "Standards & consistency",
  },
  {
    title: "Everything feels urgent",
    premise: "There is always something that needs attention now, leaving no room for strategic work.",
    effect: "When everything is a priority, nothing is actually a priority.",
    approach: "We install a decision framework that separates the urgent from the vital.",
    focus: "Decision prioritization",
  },
  {
    title: "Decisions take longer than they should",
    premise: "You hesitate or revisit choices because the data feels murky or incomplete.",
    effect: "Slow decision-making acts as a brake on the entire operation.",
    approach: "We clean the signal so you can make high-stakes calls with speed.",
    focus: "Signal isolation",
  },
  {
    title: "You’re still the bottleneck",
    premise: "You’ve delegated tasks, but things still slow down the moment you step away.",
    effect: "The business is tethered to your personal bandwidth, capping your growth.",
    approach: "We define ownership lanes so the system runs without your constant input.",
    focus: "Ownership & delegation",
  },
  {
    title: "Growth doesn’t bring relief",
    premise: "Revenue and headcount are up, but the day-to-day feels heavier and more complex.",
    effect: "Complexity is eating your margins and your peace of mind.",
    approach: "We simplify the operating rhythm to scale without the chaos.",
    focus: "Operational discipline",
  },
];

export default function ErosionGrid() {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 flex justify-center z-0"
        aria-hidden="true"
      >
        <div className="h-full w-px bg-white/5" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-8 py-16">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Most problems don’t show up as emergencies
          </h2>
          <p className="mt-4 text-lg text-slate-400 font-normal leading-relaxed">
            They show up as friction. Nothing breaks all at once – things just wear down over time.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue) => (
            <div
              key={issue.title}
              className="group relative h-64 overflow-hidden rounded-none border border-white/10 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40"
            >
              <div className="flex h-full flex-col p-8 transition-all duration-500 group-hover:blur-sm group-hover:opacity-20">
                <h3 className="text-base font-semibold leading-snug text-white/90">
                  {issue.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {issue.premise}
                </p>

                <div className="mt-auto flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-20"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-500/80">
                    {issue.focus}
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 h-[85%] translate-y-[101%] bg-blue-950 p-6 transition-transform duration-300 ease-out group-hover:translate-y-0 group-active:translate-y-0 shadow-2xl">
                <div className="flex h-full flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-blue-400/50">The Effect</span>
                      <p className="text-xs leading-relaxed text-blue-100/80 italic">{issue.effect}</p>
                    </div>
                  </div>

                  <div className="mt-2 border-t border-blue-800 pt-4">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-blue-400">Our Focus</span>
                    <p className="text-[11px] font-bold text-white uppercase mt-1 leading-tight">{issue.approach}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-medium text-slate-500">
            These issues feel separate. <span className="text-white/80">They aren’t.</span>
          </p>
          <p className="mt-8 text-4xl font-bold tracking-tight text-white/90">
            Disciplined systems, meet confident decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
