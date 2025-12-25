import React from "react";

type Step = {
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    title: "Get honest about what’s happening",
    body: "Not vibes. Not blame. Reality. We isolate the true constraints — where execution, ownership, and decisions actually break.",
  },
  {
    title: "Build the structure that should have existed already",
    body: "Decision lanes. Expectations. Operating rhythm. Accountability that’s fair and consistent — without drama.",
  },
  {
    title: "Run it until it runs",
    body: "This is where most frameworks die. We stay close enough to make sure the structure holds under real pressure.",
  },
];

function HoverCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="group relative rounded-sm border border-white/10 bg-white/5 p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10 hover:shadow-2xl">
      <div className="absolute left-0 top-0 h-full w-px bg-blue-400/30" />
      <div className="pl-4 space-y-4">
        <div className="border-b border-white/10 pb-3">
          <h3 className="text-white font-semibold tracking-tight transition-colors group-hover:text-blue-400">
            {title}
          </h3>
        </div>
        <p className="text-slate-300 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function HowWeWork() {
  return (
    <section data-theme="dark-section" className="bg-slate-950 py-24 sm:py-32 relative overflow-hidden border-t border-slate-900">
      <div className="absolute left-1/2 top-0 w-px h-full bg-white/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-500/80" />
            <span className="text-blue-400 font-mono text-xs tracking-[0.2em] uppercase font-bold">
              Engagement model
            </span>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tight text-white">
            How we <span className="text-blue-400">work</span>
          </h2>

          <p className="mt-6 text-xl text-slate-300 leading-relaxed border-l-4 border-white/10 pl-6">
            No theater. No transformation journey.<br />
            Just practical structure that holds under load.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <HoverCard key={s.title} title={s.title}>
              {s.body}
            </HoverCard>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto pt-10 border-t border-white/10">
          <p className="text-center text-2xl font-medium text-slate-100 leading-relaxed">
            The goal is predictable execution — without you becoming the operating system.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-slate-700/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
