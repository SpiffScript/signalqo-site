import { Layers, Search, Activity } from "lucide-react";
import type { NavItem, ServiceOffering, EcosystemBrand } from "./types";
import { RoutePath } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: RoutePath.HOME },
  { label: 'Services', path: RoutePath.SERVICES },
  { label: 'LeadershipQo', path: RoutePath.LEADERSHIPQO },
  { label: 'Solutions', path: RoutePath.SOLUTIONS },
  { label: 'Next Steps', path: RoutePath.NEXT_STEPS },
  { label: 'About', path: RoutePath.ABOUT },
  { label: 'Contact', path: RoutePath.CONTACT },
];

export const OFFERINGS: ServiceOffering[] = [
  {
    id: "decision-review",
    title: "Decision Review",
    description:
      "A rapid, high-stakes analysis session for a single critical fork in the road. We pressure test your logic and outline the downside.",
    features: ["60–90 Minute Intensive", "Risk Calculation", 'Clear "Go/No-Go" Output'],
    cta: "Book Review",
  },
  {
    id: "signal-audit",
    title: "Operational Signal Audit",
    description:
      "A deep dive into your operational data and workflows to identify the 3–5 bottlenecks actually killing your margin.",
    features: ["Full System Review", "Bottleneck Identification", "Implementation Roadmap"],
    cta: "Start Audit",
  },
  {
    id: "retainer",
    title: "Signal Retainer",
    description:
      "Ongoing decision support for operators who need a second brain. Limited slots available for active leadership teams.",
    features: ["Priority Access", "Weekly Sync", "Vendor/Hire Vetting"],
    cta: "Apply for Retainer",
  },
];

export const ECOSYSTEM: EcosystemBrand[] = [
  {
    name: "InfraQo",
    tagline: "Build what works.",
    description: "Execution & infrastructure.",
    color: "text-emerald-500",
    icon: Layers,
    href: "https://infraqo.com",
  },
  {
    name: "IndexQo",
    tagline: "Rank what matters.",
    description: "Web & search performance.",
    color: "text-sky-500",
    icon: Search,
    href: "https://indexqo.com",
  },
  {
    name: "SignalQo",
    tagline: "Clarity over chaos.",
    description: "Decision systems & operational signal.",
    color: "text-blue-500",
    icon: Activity,
    href: "/",
  },
];
