export default function NextStepsHero() {
  return (
    <section data-theme="dark-section" className="bg-black py-24 sm:py-28 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 w-px h-full bg-white/5 hidden lg:block" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-blue-400/85" />
            <span className="text-blue-400/85 font-mono text-xs tracking-[0.2em] uppercase font-bold">
              Next Steps
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            Here’s what happens <span className="text-blue-400">after</span> you reach out.
          </h1>

          <p className="mt-7 text-xl text-white/60 leading-relaxed border-l-4 border-white/10 pl-6">
            No theater. No mystery. A clear path from “this feels heavy” to predictable execution —
            with the smallest amount of complexity required.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/50">
            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-blue-400/80 font-mono text-xs tracking-[0.2em] uppercase font-bold">Focus</span>
              Signal → Decisions → Execution
            </span>
            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-blue-400/80 font-mono text-xs tracking-[0.2em] uppercase font-bold">Cadence</span>
              Practical + consistent
            </span>
            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-blue-400/80 font-mono text-xs tracking-[0.2em] uppercase font-bold">Goal</span>
              The system carries weight
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-slate-700/20 blur-3xl" />
      </div>
    </section>
  );
}
