export default function WhoItsFor() {
  return (
    <section data-theme="dark-section" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-white">Who this is for</h2>
          <div className="mt-4 h-1 w-[72px] bg-blue-400/85" />
          <p className="mt-6 text-lg leading-relaxed text-white/50">
            Built for operators, not just dreamers. We’re for the leaders who know that "good enough"
            is a growth killer. If you crave operational discipline and a team that actually closes the
            loop, you’ve found your home.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-white/5 bg-slate-900 p-8">
            <p className="text-[12px] font-bold tracking-[0.2em] text-blue-400/85 uppercase">
              This is for you if…
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "You’re tired of carrying the whole business in your head",
                "You want managers who execute without constant reminders",
                "You’re willing to make decisions and hold a standard",
                "You want the operation to feel calmer and more predictable",
              ].map((x) => (
                <li key={x} className="flex gap-3 text-[15px] leading-relaxed text-white/80">
                  <span className="font-bold text-blue-500/50 text-lg leading-none">→</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/5 bg-slate-900 p-8">
            <p className="text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase">
              This is not for you if…
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "You want motivation instead of structure",
                "You want someone to “fix the team” without changing anything",
                "You’re hunting for a magic framework with no follow-through",
                "You want a consultant to validate decisions you’ve already made",
              ].map((x) => (
                <li key={x} className="flex gap-3 text-[15px] leading-relaxed text-white/60">
                  <span className="font-bold text-white/20">—</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
