export type FlowModeKey = "problems" | "solutions";
export type LaneKey = "people" | "systems" | "financial";

export interface FlowCard {
  title: string;

  overview: string;
  problem: string;
  solution: string;

  detail?: string;
}

export interface FlowCategory {
  key: string;
  label: string;
  lanes: Record<LaneKey, FlowCard[]>;
}

export const PROBLEM_CATEGORIES: FlowCategory[] = [
  {
    key: "leadership-bottlenecks",
    label: "Leadership bottlenecks",
    lanes: {
      people: [
        {
          title: "Everything rolls uphill",
          overview:
          "At a high level, this reflects how structure (or lack of structure) shapes the way work moves through the organization.",

        problem:
          "In day-to-day operations, this creates friction, delays, and unnecessary cognitive load for people trying to get work done.",

        solution:
          "Clear ownership, defined decision paths, and explicit operating rules allow work to move forward cleanly and predictably.",
              },
        {
          title: "Managers relay, they don’t lead",
          overview:
          "At a high level, this reflects how structure (or lack of structure) shapes the way work moves through the organization.",

        problem:
          "In day-to-day operations, this creates friction, delays, and unnecessary cognitive load for people trying to get work done.",

        solution:
          "Clear ownership, defined decision paths, and explicit operating rules allow work to move forward cleanly and predictably.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "At a high level, this reflects how structure (or lack of structure) shapes the way work moves through the organization.",

        problem:
          "In day-to-day operations, this creates friction, delays, and unnecessary cognitive load for people trying to get work done.",

        solution:
          "Clear ownership, defined decision paths, and explicit operating rules allow work to move forward cleanly and predictably.",
        },
        {
          title: "Teams manage around personalities",
          overview:
          "At a high level, this reflects how structure (or lack of structure) shapes the way work moves through the organization.",

        problem:
          "In day-to-day operations, this creates friction, delays, and unnecessary cognitive load for people trying to get work done.",

        solution:
          "Clear ownership, defined decision paths, and explicit operating rules allow work to move forward cleanly and predictably.",
              },
      ],
      systems: [
        {
          title: "No clear decision lanes",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Informal rules everywhere",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Meetings without outcomes",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
      financial: [
        {
          title: "Owner time becomes the bottleneck",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Slow decisions increase hidden cost",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Leadership burnout risk",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
    },
  },
  {
    key: "role-confusion",
    label: "Role confusion & drift",
    lanes: {
      people: [
        {
          title: "Work bounces between people",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Strong people become catch-alls",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Accountability feels personal",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
      systems: [
        {
          title: "Job descriptions don’t match reality",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Hand-offs are improvisational",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Coverage is built on hope",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
      financial: [
        {
          title: "Rework becomes normal",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Payroll buys the wrong work",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Turnover in key roles",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
              },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
    },
  },
  {
    key: "daily-firefighting",
    label: "Daily firefighting & chaos loops",
    lanes: {
      people: [
        {
          title: "Every day starts behind",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "No one trusts the plan",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Good people become short-tempered",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
      systems: [
        {
          title: "Priorities reset all day long",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything is handled as a one-off",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "No time to improve the work",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
      financial: [
        {
          title: "Overtime becomes normal",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Projects never finish",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Owner exhaustion reduces judgment",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
              },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
              },
      ],
    },
  },
];

export const SOLUTION_CATEGORIES: FlowCategory[] = [
  {
    key: "leadership-training",
    label: "Leadership training",
    lanes: {
      people: [
        {
          title: "Managers know what ‘good’ looks like",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Direction replaces guesswork",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Ownership lands at the right level",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
      systems: [
        {
          title: "Rhythms for 1:1s and huddles",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Leadership playbooks exist",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Escalation rules are simple",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },{
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
      financial: [
        {
          title: "Better use of manager time",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Turnover cost comes down",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Labor choices match the plan",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
    },
  },
  {
    key: "ops-audit",
    label: "Operations audit",
    lanes: {
      people: [
        {
          title: "Reality finally gets mapped",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Roles realign with the work",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Hidden heroes are identified",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
      systems: [
        {
          title: "The day has a visible structure",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Collisions between teams surface",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Recurring issues get a plan",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
      financial: [
        {
          title: "Labor tied to specific work",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Clear targets for improvement",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Better basis for investment",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
    },
  },
  {
    key: "process-audit",
    label: "Process audit",
    lanes: {
      people: [
        {
          title: "Work stops living in memory",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Training matches reality",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Less blame, more clarity",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
      systems: [
        {
          title: "Shadow workflows exposed",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Unnecessary steps removed",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Data moves cleanly",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
      financial: [
        {
          title: "Cycle time shrinks",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Error cost drops",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Foundation for automation",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
        {
          title: "Everything rolls uphill",
          overview:
          "This represents a systemic pattern that affects how decisions, accountability, and execution unfold over time.",

        problem:
          "In practice, this leads to confusion, rework, delays, and avoidable pressure on individuals and teams.",

        solution:
          "Introducing clear structure and ownership restores flow, reduces friction, and improves execution consistency.",
        },
      ],
    },
  },
];

export type FlowCategoryKey = FlowCategory["key"];

export const SIGNAL_FLOW: Record<FlowModeKey, Record<string, FlowCategory>> = {
  problems: Object.fromEntries(PROBLEM_CATEGORIES.map((c) => [c.key, c])),
  solutions: Object.fromEntries(SOLUTION_CATEGORIES.map((c) => [c.key, c])),
};
