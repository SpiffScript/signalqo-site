export default function HumanLoadReduction() {
  return (
    <section data-theme="dark-section"
    className="bg-slate-950 py-24 sm:py-32 relative overflow-hidden border-t border-slate-900">
      {/* subtle center vertical line */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-white/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-500/80" />
            <span className="text-blue-400 font-mono text-xs tracking-[0.2em] uppercase font-bold">
              Leadership load
            </span>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tight text-white">
            Human load <span className="text-blue-400">reduction</span>
          </h2>

          <p className="mt-6 text-xl text-slate-300 leading-relaxed border-l-4 border-white/10 pl-6">
            When the business stabilizes, the pressure changes shape. It doesn’t vanish —
            it becomes contained. Leadership stops feeling like endurance and starts
            feeling like control.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <HoverCard title="Decision Confidence">
            Decisions stop lingering after they’re made. The replay loop quiets. Not
            because outcomes are guaranteed — because the decision process is clear
            enough to trust.
          </HoverCard>

          <HoverCard title="Role Boundaries & Ownership">
            Responsibility becomes defined instead of absorbed. You stay accountable
            without carrying everything personally. Ownership shifts from “hold it all”
            to “design what holds.”
          </HoverCard>

          <HoverCard title="Cognitive Load Reduction">
            Fewer open loops compete for attention. Interruptions stop masquerading as
            urgency. Mental energy moves from constant triage to intentional focus.
          </HoverCard>
        </div>

        {/* Net effect */}
        <div className="mt-20 max-w-4xl mx-auto pt-10 border-t border-white/10">
          <p className="text-center text-xl font-medium text-slate-100 leading-relaxed">
            Pressure containment is the real win. The weight is still there — but it’s
            carried by structure, not willpower.
          </p>
        </div>

        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-slate-700/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function HoverCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-sm border border-white/10 bg-white/5 p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10 hover:shadow-2xl">
      {/* left accent rule */}
      <div className="absolute left-0 top-0 h-full w-px bg-blue-400/30" />

      <div className="pl-4 space-y-4">
        <div className="border-b border-white/10 pb-3">
          <h3 className="text-white font-semibold tracking-tight transition-colors group-hover:text-blue-400">
            {title}
          </h3>
        </div>

        <p className="text-slate-300 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}
