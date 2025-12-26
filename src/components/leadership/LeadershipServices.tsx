type FocusArea = {
  title: string;
  who: string;
  looksLike: string[];
  work: string[];
  outcome: string;
};

const FOCUS: FocusArea[] = [
  {
    title: "Decision Confidence",
    who: "For leaders who hesitate, overthink, or second-guess",
    looksLike: [
      "Revisiting decisions repeatedly",
      "Delaying action while collecting more input",
      "Feeling responsible for every outcome",
      "Knowing what to do — but not fully trusting it",
    ],
    work: [
      "Decision-making under real pressure",
      "Reducing reversals and indecision loops",
      "Separating responsibility from ownership",
      "Building confident, repeatable decision patterns",
    ],
    outcome: "Clear decisions. Fewer reversals. Less mental drag.",
  },
  {
    title: "Authority & Accountability",
    who: "For leaders who are respected but not always followed",
    looksLike: [
      "People like you, but execution is inconsistent",
      "Accountability conversations stall or get avoided",
      "Standards drift unless you’re watching",
      "You carry more than your role should require",
    ],
    work: [
      "Setting expectations that actually stick",
      "Holding accountability without becoming someone you’re not",
      "Reinforcing standards consistently",
      "Removing ambiguity that weakens authority",
    ],
    outcome: "Follow-through without constant pressure. Cleaner execution across the team.",
  },
  {
    title: "Communication Under Pressure",
    who: "For leaders whose message gets distorted, softened, or ignored",
    looksLike: [
      "You explain things clearly — and they still miss it",
      "Meetings feel circular",
      "Tension rises when stakes are high",
      "You over-explain to prevent conflict",
    ],
    work: [
      "Saying the right thing at the right moment",
      "Reducing over-explanation and mixed messages",
      "Handling hard conversations cleanly",
      "Communicating expectations without noise",
    ],
    outcome: "Less repetition. Fewer misunderstandings. More reliable follow-through.",
  },
  {
    title: "Leadership Load",
    who: "For leaders carrying weight that keeps compounding",
    looksLike: [
      "Constant mental fatigue even when things are going well",
      "Difficulty stepping away without things slipping",
      "Being the default solver for too many problems",
      "Leading with high standards — at a personal cost",
    ],
    work: [
      "Clarifying what only you should carry",
      "Strengthening how responsibility is carried over time",
      "Building sustainable leadership rhythms",
      "Creating capacity without lowering standards",
    ],
    outcome: "More capacity. Clearer head. Sustainable leadership without losing edge.",
  },
];

function FocusCard({ item }: { item: FocusArea }) {
  return (
    <div className="group border border-white/5 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900/80">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm font-medium text-white/40 uppercase tracking-widest">
          {item.who}
        </p>
      </div>

      <div className="mt-10 grid gap-12 md:grid-cols-2 relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />

        <div className="space-y-4">
          <p className="text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase">
            The Pressure Point
          </p>
          <ul className="space-y-3">
            {item.looksLike.map((x) => (
              <li
                key={x}
                className="group/item flex gap-3 text-[15px] leading-relaxed text-white/60 transition-transform duration-200 hover:scale-[1.02]"
              >
                <span className="font-bold text-white/20 transition-colors duration-200 group-hover/item:text-red-400">
                  —
                </span>
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-[12px] font-bold tracking-[0.2em] text-blue-400/85 uppercase">
            The Strategic Work
          </p>
          <ul className="space-y-3">
            {item.work.map((x) => (
              <li
                key={x}
                className="group/item flex gap-3 text-[15px] leading-relaxed text-white/80 transition-transform duration-200 hover:scale-[1.02]"
              >
                <span className="font-bold text-blue-500/50 text-lg leading-none transition-colors duration-200 group-hover/item:text-green-400">
                  →
                </span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/5 pt-6">
        <div className="flex items-start gap-3">
          <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase mt-1.5">
            Outcome:
          </span>
          <p className="text-[16px] font-medium leading-relaxed text-blue-100/90 italic">
            "{item.outcome}"
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LeadershipServices() {
  return (
    <section id="leadership-services" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Strategic Signals
          </h2>
          <div className="mt-4 h-1 w-[72px] bg-blue-400/85" />
          <p className="mt-6 text-lg leading-relaxed text-white/50">
            Four lanes. Each one names a real leadership pressure point — and the practical work we do to resolve it.
          </p>
        </div>

        <div className="grid gap-8">
          {FOCUS.map((item) => (
            <FocusCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
