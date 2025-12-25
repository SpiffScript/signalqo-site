import SolutionsPanel from "./SolutionsPanel";

export default function BusinessSystemStability() {
  return (
    <section className="bg-slate-100 py-24 sm:py-32 relative overflow-hidden">
      {/* 1. Structural "Signal" Line - A vertical anchor that runs through the header down into the grid */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-slate-300/50 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header - High Contrast and Color-Blocked */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-blue-600 font-mono text-xs tracking-[0.2em] uppercase font-bold">
              Operational Framework
            </span>
          </div>
          <h2 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Business system <span className="text-blue-600">stability</span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed border-l-4 border-slate-300 pl-6">
            When SignalQo is working, the business gets quieter. The system absorbs pressure instead of routing everything back to the owner.
          </p>
        </div>

        {/* The "Module" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">

          {/* Card 1: Decision Flow - Using a "Subtle Glass" effect with a blue top-border */}
          <div className="group relative bg-white border border-slate-200 p-8 rounded-sm shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-500/50 overflow-hidden">
            {/* Interactive Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 transition-colors group-hover:bg-blue-600/10 rotate-45 translate-x-8 -translate-y-8" />

            <SolutionsPanel
              title={<span className="text-slate-900 group-hover:text-blue-700 transition-colors">Decision flow & ownership</span>}
              body="Decisions stop circulating endlessly and start moving with intent. Authority becomes explicit. Input becomes useful instead of binding."
              sub="The owner stops serving as the default bottleneck, and decisions begin landing where they’re supposed to land."
            />
          </div>

          {/* Card 2: Execution - Using a soft Slate-Blue tint */}
          <div className="group relative bg-slate-50 border border-slate-200 p-8 rounded-sm shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-500/50">
            <SolutionsPanel
              title={<span className="text-slate-900 group-hover:text-blue-700 transition-colors">Execution & process stability</span>}
              body="Work becomes repeatable without constant oversight. Standards hold under load. Outcomes get more predictable across shifts, teams, and managers."
              sub="The business stops relying on heroics to maintain quality. Performance becomes less dependent on specific people."
            />
          </div>

          {/* Card 3: Alignment - Matching Card 2's tint for checkerboard effect */}
          <div className="group relative bg-slate-50 border border-slate-200 p-8 rounded-sm shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-500/50">
            <SolutionsPanel
              title={<span className="text-slate-900 group-hover:text-blue-700 transition-colors">Organizational alignment</span>}
              body="Teams move in the same direction without friction. Priorities stop competing. Accountability shows up in behavior, not meetings."
              sub="Conflicting directives reduce. Work stops falling between departments."
            />
          </div>

          {/* Card 4: Visibility - Matching Card 1's white background */}
          <div className="group relative bg-white border border-slate-200 p-8 rounded-sm shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-500/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 transition-colors group-hover:bg-blue-600/10 rotate-45 translate-x-8 -translate-y-8" />
            <SolutionsPanel
              title={<span className="text-slate-900 group-hover:text-blue-700 transition-colors">Operating visibility & cadence</span>}
              body="Problems surface earlier — when they’re easier to solve. Leaders see signals before they become fires. Review rhythms create forward motion."
              sub="Surprise load decreases, and leadership time shifts upstream. Less firefighting. More control."
            />
          </div>
        </div>

        {/* Net Effect — Quiet Resolution */}
        <div className="mt-20 max-w-4xl mx-auto pt-10 border-t border-slate-300/70">
          <p className="text-center text-xl font-medium text-slate-800 leading-relaxed">
            The business stops depending on constant personal intervention and begins operating
            as a system that can carry weight without collapsing inward.
          </p>
        </div>
      </div>
    </section>
  );
}
