import SolutionsPanel from "./SolutionsPanel";

export default function SystemIntegration() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 relative overflow-hidden border-t border-slate-200/70">
      {/* subtle center line to tie sections together */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-slate-200 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl">
          {/* label + accent line, consistent with other sections */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-blue-600 font-mono text-xs tracking-[0.2em] uppercase font-bold">
              System integration
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Work that holds together, not just in one lane
          </h2>

          <p className="mt-6 text-lg text-slate-700 leading-relaxed border-l-4 border-slate-300 pl-6">
            Work inside a business rarely stays contained to a single lane. Systems intersect.
            People carry load. Decisions ripple outward.
          </p>
        </div>

        <div className="mt-10 max-w-2xl">
          {/* Card style matched to BusinessSystemStability.tsx */}
          <div className="group relative bg-white border border-slate-200 p-8 rounded-sm shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-500/50 overflow-hidden">
            {/* corner accent, same as stability cards 1 & 4 */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 transition-colors group-hover:bg-blue-600/10 rotate-45 translate-x-8 -translate-y-8" />
              <SolutionsPanel
                title={<span className="text-slate-900 group-hover:text-blue-700 transition-colors">We design the work to follow the system, not just the task.</span>}
                body="Engagements are defined with intent, but the work isn’t approached narrowly.
                When something materially affects the outcome or durability of the work, it’s surfaced."
                sub="Not everything becomes an initiative. Not everything requires escalation. But
                nothing critical is ignored simply because it wasn’t named at the outset. The objective
                isn’t expansion — it’s coherence: work that holds once it’s live, because the system
                around it was acknowledged."
              />
            </div>
          </div>
        </div>

    </section>
  );
}
