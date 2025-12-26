export default function Metrics() {
  return (
    <section className="relative py-20 bg-slate-950 text-white overflow-hidden">

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
        <div
          className="pointer-events-none absolute inset-0 flex justify-center"
          aria-hidden="true"
        >
          <div className="w-px bg-white/5"></div>
        </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">

        <div className="inline-block px-3 py-1 mb-6 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] tracking-[0.3em] uppercase">
          Operational Intelligence
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
          Real operators. <span className="text-blue-500">Real numbers.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">

          <div className="relative group">
            <div className="text-6xl md:text-7xl font-black font-mono tracking-tighter text-white opacity-90 group-hover:text-blue-400 transition-colors">
              20+
            </div>
            <div className="mt-2 text-xs font-mono tracking-widest uppercase text-slate-400">
              Years in Ops
            </div>
            <div className="mt-1 text-[10px] text-slate-500 italic">
              Built in the field, not in theory.
            </div>
          </div>

          <div className="relative group">
            <div className="text-6xl md:text-7xl font-black font-mono tracking-tighter text-white opacity-90 group-hover:text-blue-400 transition-colors">
              $50M+
            </div>
            <div className="mt-2 text-xs font-mono tracking-widest uppercase text-slate-400">
              Capital Deployed
            </div>
            <div className="mt-1 text-[10px] text-slate-500 italic">
              Decisions with real stakes.
            </div>
          </div>

          <div className="relative group">
            <div className="text-6xl md:text-7xl font-black font-mono tracking-tighter text-red-500">
              0
            </div>
            <div className="mt-2 text-xs font-mono tracking-widest uppercase text-slate-400">
              Motivational Speeches
            </div>
            <div className="mt-1 text-[10px] text-red-400/70 font-bold uppercase tracking-tighter">
              Intervention &gt; Inspiration.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
