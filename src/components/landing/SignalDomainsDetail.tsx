export type DomainKey =
  | "leadership"
  | "accountability"
  | "process"
  | "handoffs"
  | "systems"
  | "financial"
  | "risk"
  | "capacity";

export type DomainNextLink =
  | { label: string; toKey: DomainKey }
  | { label: string; kind: "handraise" };

export type Domain = {
  key: DomainKey;
  title: string;
  subtitle: string;

  pressureIntro: string;
  pressurePoints: string[];

  focusIntro: string;
  focusPoints: string[];

  nextLink?: DomainNextLink;
};

export const DOMAINS: Domain[] = [
  {
    key: "leadership",
    title: "Leadership & Decision-Making",
    subtitle: "Clarity, judgment, and how decisions actually get made.",
    pressureIntro: "When pressure builds here, it usually looks like:",
    pressurePoints: [
      "Decisions bottlenecking at one or two people",
      "Priorities shifting without warning or context",
      "Teams waiting instead of moving",
      "Leadership absorbing noise instead of directing work",
    ],
    focusIntro: "Our focus in this area:",
    focusPoints: [
      "Clarifying decision ownership and thresholds",
      "Separating urgency from importance",
      "Establishing consistent decision flow",
      "Reducing rework caused by reversals and ambiguity",
    ],
    nextLink: { label: "See how this impacts accountability", toKey: "accountability" },
  },
  {
    key: "accountability",
    title: "Accountability & Ownership",
    subtitle: "Where responsibility lives — and where it quietly disappears.",
    pressureIntro: "When pressure builds here, it usually looks like:",
    pressurePoints: [
      "Work assumed to be owned, but never clearly assigned",
      "Follow-ups replacing ownership",
      "Accountability tied to personalities instead of roles",
      "Issues resurfacing because nothing fully closed",
    ],
    focusIntro: "Our focus in this area:",
    focusPoints: [
      "Clarifying ownership at every handoff",
      "Making responsibility visible and unambiguous",
      "Separating accountability from blame",
      "Ensuring work closes cleanly, not quietly",
    ],
    nextLink: { label: "See how this affects process & execution", toKey: "process" },
  },
  {
    key: "process",
    title: "Process & Execution",
    subtitle: "How work moves from intent to completion.",
    pressureIntro: "When pressure builds here, it usually looks like:",
    pressurePoints: [
      "Work stalling between steps, not within roles",
      "Processes that exist, but don’t reflect how work actually happens",
      "Teams improvising to keep things moving",
      "“Done” meaning different things to different people",
    ],
    focusIntro: "Our focus in this area:",
    focusPoints: [
      "Aligning documented process with real-world execution",
      "Clarifying handoffs, dependencies, and completion criteria",
      "Reducing friction that creates hidden rework",
      "Creating flow that holds up under normal operating pressure",
    ],
    nextLink: { label: "See how this affects communication & handoffs", toKey: "handoffs" },
  },
  {
    key: "handoffs",
    title: "Communication & Handoffs",
    subtitle: "What gets lost between people, teams, and tools.",
    pressureIntro: "When pressure builds here, it usually looks like:",
    pressurePoints: [
      "Context dropping between teams or shifts",
      "Decisions communicated without rationale",
      "Information living in inboxes, chats, or heads",
      "Rework caused by incomplete or late handoffs",
    ],
    focusIntro: "Our focus in this area:",
    focusPoints: [
      "Defining what must transfer at each handoff",
      "Reducing noise while preserving signal",
      "Aligning communication with how work actually flows",
      "Preventing avoidable breakdowns between teams",
    ],
    nextLink: { label: "See how this impacts systems & tooling", toKey: "systems" },
  },
  {
    key: "systems",
    title: "Systems & Tooling",
    subtitle: "The systems meant to support the work — and when they don’t.",
    pressureIntro: "When pressure builds here, it usually looks like:",
    pressurePoints: [
      "Tools added to compensate for broken process",
      "Systems bypassed to “get things done”",
      "Duplicate work across platforms",
      "Teams adapting to tools instead of the other way around",
    ],
    focusIntro: "Our focus in this area:",
    focusPoints: [
      "Aligning systems to real operational needs",
      "Reducing tool sprawl and workarounds",
      "Ensuring systems reinforce process, not replace it",
      "Creating consistency without slowing execution",
    ],
    nextLink: { label: "See how this affects financial visibility", toKey: "financial" },
  },
  {
    key: "financial",
    title: "Financial Visibility",
    subtitle: "What the numbers show, hide, or lag behind.",
    pressureIntro: "When pressure builds here, it usually looks like:",
    pressurePoints: [
      "Financial results arriving too late to act on",
      "Variance explained after the fact",
      "Healthy-looking totals masking weak fundamentals",
      "Decisions made without reliable signal",
    ],
    focusIntro: "Our focus in this area:",
    focusPoints: [
      "Improving timeliness and clarity of financial signal",
      "Connecting operational activity to financial impact",
      "Reducing surprises through better visibility",
      "Supporting proactive, not reactive, decisions",
    ],
    nextLink: { label: "See how this connects to risk & exposure", toKey: "risk" },
  },
  {
    key: "risk",
    title: "Risk & Exposure",
    subtitle: "Where small issues quietly compound into real threats.",
    pressureIntro: "When pressure builds here, it usually looks like:",
    pressurePoints: [
      "Known issues deferred “for now”",
      "Informal exceptions becoming standard practice",
      "Risk normalized as part of doing business",
      "Leadership discovering exposure too late",
    ],
    focusIntro: "Our focus in this area:",
    focusPoints: [
      "Identifying risk where it actually accumulates",
      "Reducing reliance on heroics and exceptions",
      "Addressing small issues before they compound",
      "Creating operating discipline that limits exposure",
    ],
    nextLink: { label: "See how this affects capacity & sustainability", toKey: "capacity" },
  },
  {
    key: "capacity",
    title: "Capacity & Sustainability",
    subtitle: "How much the business can actually handle — and for how long.",
    pressureIntro: "When pressure builds here, it usually looks like:",
    pressurePoints: [
      "Constant urgency replacing prioritization",
      "Teams operating at full tilt indefinitely",
      "Growth stressing systems faster than expected",
      "Burnout treated as a people problem",
    ],
    focusIntro: "Our focus in this area:",
    focusPoints: [
      "Aligning workload with true capacity",
      "Creating operating margins, not just financial ones",
      "Supporting growth without chronic strain",
      "Building systems that hold under sustained pressure",
    ],
    nextLink: { label: "Open a conversation.", kind: "handraise" }
  },
];
