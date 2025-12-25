// ServicesPreview.tsx Refined
export default function DirectEngagement() {
  const lanes = [
    {
      tag: "LeadershipQo",
      title: "Scale the leadership layer",
      domain: "Primary Focus: Revenue protection and executive bandwidth.",
      premise: "As you grow, your personal involvement becomes the ceiling. We build the decision discipline and accountability needed for the business to carry its own weight.",
      details: "Institutionalizing 'Signal' across management to ensure execution doesn't depend on heroics.",
      outcome: "Sustainable growth that generates revenue without requiring your constant personal intervention.",
      linkText: "Explore LeadershipQo",
      href: "/leadership"
    },
    {
      tag: "Services",
      title: "Direct Operational Intervention",
      domain: "Primary Focus: Identifying and removing execution friction.",
      premise: "Audits and implementation support for when you know something is wrong but can't isolate the cause. We provide the objective outside signal to fix the rot.",
      details: "High-impact audits and decision support designed to stabilize performance quickly.",
      outcome: "Immediate clarity on constraints and a tactical roadmap to resolution.",
      linkText: "View Services",
      href: "/services"
    },
    {
      tag: "Solutions",
      title: "Proprietary Systems & Tools",
      domain: "Primary Focus: Data integrity and systemic consistency.",
      premise: "The infrastructure that turns raw data into actionable signal. Custom solutions built to ensure your operating rhythm stays honest and your standards stay high.",
      details: "Technical and structural toolsets (InfraQo, IndexQo) that automate operational visibility.",
      outcome: "A single source of truth that allows for faster, more confident decision-making.",
      linkText: "Explore Solutions",
      href: "/solutions"
    }
  ];

  return (
    <section className="relative py-24 bg-slate-100 overflow-hidden">
      {/* Center spine for light section */}
      <div className="pointer-events-none absolute inset-0 flex justify-center" aria-hidden="true">
        <div className="w-px bg-slate-300/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Header - Refined and Professional */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">
            Operational Alignment
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            The path to a quieter operation depends on where your friction lives today.
            Choose the engagement model that protects your revenue and your time.
          </p>
        </div>

        {/* The Main 3-Box Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {lanes.map((lane) => (
            <div
              key={lane.tag}
              className="group relative h-80 overflow-hidden rounded-sm bg-slate-900 text-slate-50 shadow-xl border border-slate-800 transition-all hover:border-blue-500/50"
            >
              {/* FRONT STATE (Observation) */}
              <div className="flex h-full flex-col p-8 transition-all duration-500 group-hover:blur-sm group-hover:opacity-10">
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-blue-400 mb-4">
                  {lane.tag}
                </p>
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  {lane.title}
                </h3>
                <p className="text-[11px] font-bold text-blue-400/80 uppercase tracking-wide mb-4">
                  {lane.domain}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed italic">
                  {lane.premise}
                </p>
              </div>

              {/* SLIDE-UP CARD (The Signal) */}
              <div className="absolute inset-x-0 bottom-0 z-20 h-[90%] translate-y-[101%] bg-blue-950 p-6 transition-transform duration-300 ease-out group-hover:translate-y-0 group-active:translate-y-0 shadow-2xl">
                <div className="flex h-full flex-col">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-blue-400">The Logic</span>
                      <p className="text-xs leading-relaxed text-blue-50/90">{lane.details}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-blue-400">The Outcome</span>
                      <p className="text-xs leading-relaxed text-blue-100/80 italic">{lane.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <a
                      href={lane.href}
                      className="w-full inline-flex items-center justify-center rounded-none bg-slate-50 text-slate-900 text-[11px] font-bold uppercase tracking-wider py-2.5 hover:bg-white transition-colors"
                    >
                      {lane.linkText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: Next Steps */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 p-10 border border-slate-200 bg-white rounded-sm shadow-sm">
          <div className="max-w-xl text-center md:text-left">
            <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-blue-600 mb-2">
              Next Steps
            </p>
            <h3 className="text-xl font-bold text-slate-900">
              Ready to see how we implement?
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We don't hide our process. Explore our engagement model, scoping logic, and what
              happens after the first conversation.
            </p>
          </div>

          {/* Wrapper ensured to keep button away from the card edges */}
          <div className="flex-shrink-0">
            <a
              href="/next-steps"
              className="inline-flex items-center justify-center rounded-none bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider px-10 py-4 hover:bg-blue-900 transition-colors shadow-lg"
            >
              See Implementation Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
