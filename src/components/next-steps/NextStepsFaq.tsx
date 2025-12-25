import { useMemo, useState } from "react";

type FaqItem = { q: string; a: string };
type FaqGroup = { title: string; subtitle?: string; items: FaqItem[] };

function AccordionItem({
  id,
  q,
  a,
  isOpen,
  onToggle,
}: {
  id: string;
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="border border-white/10 bg-white/5">
      <button
        type="button"
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
      >
        <span className="text-white font-semibold tracking-tight">{q}</span>
        <span
          className={[
            "text-white/50 font-mono text-sm transition-transform duration-200",
            isOpen ? "rotate-45" : "rotate-0",
          ].join(" ")}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        id={`${id}-panel`}
        className={[
          "px-6 overflow-hidden transition-all duration-200",
          isOpen ? "max-h-[420px] pb-6" : "max-h-0 pb-0",
        ].join(" ")}
      >
        <p className="text-white/60 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function NextStepsFaq() {
  const groups: FaqGroup[] = useMemo(
    () => [
      {
        title: "Getting Started",
        subtitle: "What to expect before anything “formal” happens.",
        items: [
          {
            q: "What happens after I reach out?",
            a:
              "We start with a short intake so we’re not guessing. Then we do a signal scan: where decisions stick, where ownership is unclear, and where execution breaks under load. From there, we recommend a focus path — either a short reset or a longer engagement if the system needs reinforcement.",
          },
          {
            q: "What does the first 30 days actually look like?",
            a:
              "Week one is clarity: isolate constraints and stop the biggest leaks. Weeks two through four are alignment and rhythm: decision lanes, standards, and a cadence that managers can actually run. You’ll feel traction early, but the point is not a burst — it’s a repeatable pattern.",
          },
          {
            q: "How quickly do we see traction?",
            a:
              "Most teams feel relief quickly once priorities, ownership, and standards are explicit. The deeper gains come from reducing rework and preventing predictable failures. If you want a realistic expectation: you’ll see movement early, and stability builds as the cadence holds.",
          },
        ],
      },
      {
        title: "Engagement & Scope",
        subtitle: "What this is — and what it isn’t.",
        items: [
          {
            q: "Is this coaching or consulting?",
            a:
              "It’s operational leadership support. Coaching tends to be individual mindset work. Traditional consulting tends to be slides and recommendations. We work inside real execution: decisions, standards, accountability, and the systems that keep things predictable.",
          },
          {
            q: "How hands-on are you?",
            a:
              "Hands-on where it matters: leadership alignment, decision lanes, operating rhythm, and reinforcement. We’re not trying to run your business, but we’re not doing drive-by advice either. If something needs to be installed and held until it sticks, we stay close enough to make sure it holds.",
          },
          {
            q: "Do you help implement or just advise?",
            a:
              "Implementation is part of the work. If we leave you with a plan and walk away, nothing changes. The amount of implementation depends on your internal capacity — some teams want support building the system, others want reinforcement so their managers can run it.",
          },
          {
            q: "Is this short-term or ongoing?",
            a:
              "Both models exist. Some situations need a short reset to restore signal and decision clarity. Others need reinforcement to keep standards from drifting. We’ll recommend the lightest engagement that actually works — not the longest one.",
          },
        ],
      },
      {
        title: "Leadership & Accountability",
        subtitle: "The questions that determine fit.",
        items: [
          {
            q: "What if my managers are the problem?",
            a:
              "Sometimes they are — but usually the system is setting them up to fail. We look for clarity gaps first: unclear standards, unclear authority, inconsistent enforcement, and competing priorities. If it’s a capability issue, we’ll call it. If it’s a structure issue, we’ll fix that before you start replacing people.",
          },
          {
            q: "What if I’m the bottleneck?",
            a:
              "That’s common, not shameful. It usually means the business has outgrown informal decision-making. We reduce unnecessary escalations by clarifying ownership and installing a cadence that catches issues earlier. The goal is not to remove you — it’s to stop you from being the operating system.",
          },
          {
            q: "Do you help with difficult conversations?",
            a:
              "Yes — because avoiding them is expensive. We’ll help you structure the conversation, set expectations, and define what “good” looks like afterward. The goal is not drama. It’s a clean standard with follow-through.",
          },
          {
            q: "How do you handle resistance?",
            a:
              "We don’t pretend it isn’t there. We name it, we separate valid constraints from avoidance, and we install inspection points so reality shows up quickly. If someone won’t align to a clear standard, the system needs to be able to surface that without constant escalation.",
          },
        ],
      },
      {
        title: "Time, Access & Logistics",
        subtitle: "How this fits into a real week.",
        items: [
          {
            q: "How much time does this take from me?",
            a:
              "Early on, more. Once the cadence is installed, less. The usual pattern is a heavier first two weeks (alignment and decisions), then a steadier rhythm (weekly cadence + targeted work). The goal is to reduce total leadership time spent on preventable issues.",
          },
          {
            q: "Do you need access to financials or staff?",
            a:
              "Only what’s necessary. Sometimes we need high-level financial signals to understand constraints and priorities. Sometimes we need manager input to see where reality differs from intent. We don’t need your entire world — we need enough signal to stop guessing.",
          },
          {
            q: "On-site or remote?",
            a:
              "Either. Remote can work extremely well if leadership is engaged and the cadence is consistent. On-site can accelerate trust and observation, especially in service businesses. We’ll recommend what fits the situation, not what sounds impressive.",
          },
        ],
      },
      {
        title: "Fit & Boundaries",
        subtitle: "When this works — and when it won’t.",
        items: [
          {
            q: "When does this not work?",
            a:
              "When leadership won’t make decisions, won’t hold a standard, or wants someone to validate what they’ve already decided. If you want structure and follow-through, this works. If you want motivation or rescue, it won’t.",
          },
          {
            q: "What don’t you do?",
            a:
              "We’re not a staffing firm, and we’re not a therapist. We don’t do performance theater or binders nobody reads. We focus on signal, decisions, execution, and leadership discipline — the operational levers that actually move outcomes.",
          },
          {
            q: "What happens if we stop mid-engagement?",
            a:
              "We end cleanly. We document what’s been installed, what still needs reinforcement, and what risks to watch for. If the goal is independence, a clean handoff is part of the work — not an afterthought.",
          },
        ],
      },
    ],
    []
  );

  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section data-theme="dark-section" className="bg-slate-950 py-24 sm:py-32 border-t border-slate-900 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 w-px h-full bg-white/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-500/80" />
            <span className="text-blue-400 font-mono text-xs tracking-[0.2em] uppercase font-bold">
              Questions operators ask
            </span>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tight text-white">
            Common questions. <span className="text-blue-400">Real Results.</span>
          </h2>

          <p className="mt-6 text-xl text-white/60 leading-relaxed border-l-4 border-white/10 pl-6">
            This section exists to save time — yours and ours. If something is a fit issue, it should show up early.
          </p>
        </div>

        <div className="space-y-10">
          {groups.map((g, gi) => (
            <div key={g.title} className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{g.title}</h3>
                {g.subtitle && <p className="mt-2 text-sm text-white/45">{g.subtitle}</p>}
              </div>

              <div className="space-y-3">
                {g.items.map((item, ii) => {
                  const id = `faq-${gi}-${ii}`;
                  return (
                    <AccordionItem
                      key={id}
                      id={id}
                      q={item.q}
                      a={item.a}
                      isOpen={openId === id}
                      onToggle={toggle}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-slate-700/20 blur-3xl" />
      </div>
    </section>
  );
}
