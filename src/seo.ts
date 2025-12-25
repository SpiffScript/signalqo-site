import { RoutePath } from "./types";

export const SITE_URL = "https://www.signalqo.com";

export const SEO_MAP: Record<
  string,
  { title: string; description: string }
> = {
  [RoutePath.HOME]: {
    title:
      "SignalQo – Businesses aren’t short-staffed – they’re short-structured",
    description:
      "SignalQo helps operators turn turbulence into structure through leadership clarity, operational audits, and execution systems that hold under pressure.",
  },

  [RoutePath.SERVICES]: {
    title:
      "SignalQo Services – Leadership, operational audits, and execution systems that hold",
    description:
      "Leadership guidance, operational audits, and execution systems built to reduce chaos, tighten accountability, and improve follow-through across teams.",
  },

  [RoutePath.LEADERSHIPQO]: {
    title:
      "LeadershipQo – Decision discipline, management consistency, and accountability that sticks",
    description:
      "Build decision discipline, management consistency, and accountability that sticks – without adding bureaucracy or slowing execution.",
  },

  [RoutePath.SOLUTIONS]: {
    title:
      "SignalQo Solutions – Build structure that keeps work from drifting back into chaos",
    description:
      "Practical structures for accountability, clarity, and execution – so the real work stops getting buried under avoidable noise and drift.",
  },

  [RoutePath.NEXT_STEPS]: {
    title:
      "Next Steps – What working with SignalQo looks like from first call to execution",
    description:
      "A clear, step-by-step engagement flow: discovery, audit, priorities, execution plan, and implementation support – with expectations defined upfront.",
  },

  [RoutePath.ABOUT]: {
    title:
      "About SignalQo – Built for operators who need clarity, not theory",
    description:
      "SignalQo exists for operators responsible for outcomes. We build clarity and structure that teams can actually execute – in the real world.",
  },

  [RoutePath.CONTACT]: {
    title:
      "Contact SignalQo – Tell us what’s slowing your business down and we’ll map the next steps",
    description:
      "Reach SignalQo to discuss leadership, audits, and execution support. We’ll respond with next steps and a clear starting point.",
  },

  [RoutePath.PRIVACY]: {
    title: "Privacy Policy – SignalQo",
    description:
      "How SignalQo handles site data, contact submissions, and privacy practices.",
  },

  [RoutePath.TERMS]: {
    title: "Terms of Service – SignalQo",
    description:
      "SignalQo terms of service for site usage and engagement terms.",
  },

  [RoutePath.ACCEPTABLE_USE]: {
    title: "Acceptable Use Policy – SignalQo",
    description:
      "SignalQo acceptable use standards for site access and service-related usage.",
  },
};
