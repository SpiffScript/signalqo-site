type Pillar = {
  title: string;
  subtitle: string;
  pain: string[];
  work: string[];
  outcome: string;
};

const PILLARS: Pillar[] = [
  {
    title: "Operational Clarity",
    subtitle: "Restoring clean decision flow and ownership",
    pain: [
      "Everything escalates to the top",
      "Managers wait instead of owning outcomes",
      "Decisions stall because ownership is unclear",
      "You’re in the middle of more than you should be",
    ],
    work: [
      "Map decision flow and escalation paths",
      "Clarify decision rights and ownership",
      "Remove approval bottlenecks",
      "Simplify “who decides what” across the org",
    ],
    outcome: "Faster decisions. Fewer interruptions. Stronger ownership at the manager level.",
  },
  {
    title: "Execution & Process Stability",
    subtitle: "Making work repeatable without micromanagement",
    pain: [
      "Standards are inconsistent across people or shifts",
      "Training doesn’t stick",
      "Processes drift as things get busier",
      "Work quality depends on specific individuals",
    ],
    work: [
      "Identify fragile or high-risk workflows",
      "Simplify and standardize core processes",
      "Align process with how work actually happens",
      "Reinforce standards through practical operating rhythms",
    ],
    outcome: "Predictable execution without babysitting. Less rework. More reliability.",
  },
  {
    title: "Organizational Alignment",
    subtitle: "Ensuring teams, expectations, and accountability line up",
    pain: [
      "Departments pull in different directions",
      "Priorities conflict or change midstream",
      "Accountability exists in theory, not in behavior",
      "People assume someone else is handling it",
    ],
    work: [
      "Align priorities, expectations, and operating targets",
      "Close the loop with low-friction accountability",
      "Reduce cross-team friction and miscommunication",
      "Clarify handoffs so work doesn’t fall between teams",
    ],
    outcome: "Teams move together. Fewer surprises. Cleaner handoffs and follow-through.",
  },
  {
    title: "Transition & Change Support",
    subtitle: "Stabilizing operations during disruption",
    pain: [
      "New leadership or re-org creates uncertainty",
      "Growth creates complexity faster than structure can keep up",
      "Turnarounds require speed without breaking the team",
      "Post-acquisition integration gets messy fast",
    ],
    work: [
      "Stabilize operations while change is underway",
      "Protect execution while standards reset",
      "Create clarity and momentum without burnout",
      "Build structure that can handle the next phase",
    ],
    outcome: "Change without collapse. Stability during transition. Momentum you can keep.",
  },
];

function Card({ pillar }: { pillar: Pillar }) {
  return (
    <div className="group border border-white/5 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900/80">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
          {pillar.title}
        </h3>
        <p className="text-sm font-medium text-white/40 uppercase tracking-widest">
          {pillar.subtitle}
        </p>
      </div>

      <div className="mt-10 grid gap-12 md:grid-cols-2 relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />

        <div className="space-y-4">
          <p className="text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase">
            The Pressure Point
          </p>
          <ul className="space-y-3">
            {pillar.pain.map((item) => (
              <li
                key={item}
                className="group/item flex gap-3 text-[15px] leading-relaxed text-white/60 transition-transform duration-200 hover:scale-[1.02]"
              >
                <span className="font-bold text-white/20 transition-colors duration-200 group-hover/item:text-red-400">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-[12px] font-bold tracking-[0.2em] text-blue-400/85 uppercase">
            The Strategic Work
          </p>
          <ul className="space-y-3">
            {pillar.work.map((item) => (
              <li
                key={item}
                className="group/item flex gap-3 text-[15px] leading-relaxed text-white/80 transition-transform duration-200 hover:scale-[1.02]"
              >
                <span className="font-bold text-lg leading-none text-blue-500/50 transition-colors duration-200 group-hover/item:text-green-400">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/5 pt-6">
        <div className="flex items-start gap-3">
          <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase mt-1">
            Outcome:
          </span>
          <p className="text-[16px] font-medium leading-relaxed text-blue-100/90 italic">
            "{pillar.outcome}"
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPillars() {
  return (
    <section id="services" className="bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white">Services</h2>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              Four organizational service lanes. No buzzwords. No generic frameworks. Just practical work that restores
              clarity and momentum.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {PILLARS.map((pillar) => (
            <Card key={pillar.title} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
