export default function WhatsSignal() {
  return (
    <section className="bg-slate-100 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 w-px h-full bg-slate-300/50 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-blue-600 font-mono text-xs tracking-[0.2em] uppercase font-bold">
              Definition
            </span>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tight text-slate-900">
            What “signal” <span className="text-blue-600">means</span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed border-l-4 border-slate-300 pl-6">
            Signal is the difference between what’s loud and what’s real. It’s the ability to see the
            constraint early — while it’s still fixable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="group relative bg-white border border-slate-200 p-8 rounded-sm shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-500/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 transition-colors group-hover:bg-blue-600/10 rotate-45 translate-x-8 -translate-y-8" />
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
              Noise
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Interruptions, urgency, opinions, and “hot takes” that pull leadership attention
              downstream — where everything is more expensive to solve.
            </p>
            <ul className="mt-6 space-y-2 text-slate-600">
              <li>• The loudest issue becomes the priority</li>
              <li>• Fires masquerade as strategy</li>
              <li>• Busy replaces progress</li>
            </ul>
          </div>

          <div className="group relative bg-slate-50 border border-slate-200 p-8 rounded-sm shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-500/50">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
              Signal
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Patterns, constraints, decision friction, ownership gaps — the things that quietly
              determine whether execution holds.
            </p>
            <ul className="mt-6 space-y-2 text-slate-600">
              <li>• You can tell “one-time” from “systemic”</li>
              <li>• You can see weak ownership before it becomes a crisis</li>
              <li>• Decisions land cleanly — and stay landed</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto pt-10 border-t border-slate-300/70">
          <p className="text-center text-2xl font-medium text-slate-800 leading-relaxed">
            When signal is strong, leadership stops feeling like endurance and starts feeling like control.
          </p>
        </div>
      </div>
    </section>
  );
}
