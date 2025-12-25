export default function SolutionsIntro() {
  return (
    <section className="bg-slate-100 py-20 sm:py-24 relative overflow-hidden border-t border-slate-200/70">
      {/* subtle center line to tie the page together */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-slate-300/40 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* small label + accent line, consistent with other sections */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-blue-600 font-mono text-xs tracking-[0.2em] uppercase font-bold">
              What changes
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            What actually changes in the business
          </h2>

          <p className="mt-6 text-lg text-slate-700 leading-relaxed border-l-4 border-slate-300 pl-6">
            Not everything improves because you add a new tool, a new meeting, or a new
            dashboard. The shift happens when the business starts operating as a system:
            decisions have owners, execution has standards, and the leader isn’t forced to
            personally compensate for structural gaps.
          </p>
        </div>
      </div>
    </section>
  );
}
