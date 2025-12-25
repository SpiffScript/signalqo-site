import React, { useEffect, useMemo, useState } from "react";
import { SIGNAL_FLOW } from "../../data/signalFlow";
import type { FlowModeKey, FlowCategoryKey, LaneKey, FlowCard } from "../../data/signalFlow";

type ViewMode = "overview" | "problems" | "solutions";

const LANE_META: Record<LaneKey, { title: string; subtitle: string }> = {
  people: {
    title: "People & Leadership",
    subtitle: "Clarity, ownership, and execution discipline.",
  },
  systems: {
    title: "Systems & Operations",
    subtitle: "Process flow, handoffs, tools, and consistency.",
  },
  financial: {
    title: "Financial & Risk",
    subtitle: "Margin protection, exposure control, and predictability.",
  },
};

export default function SignalFlowMap() {
  // View is per-card content mode (Overview/Problems/Solutions)
  const [view, setView] = useState<ViewMode>("overview");

  // Soft view transitions (wrapper-level)
  const [isViewSwitching, setIsViewSwitching] = useState(false);
  const requestViewChange = (next: ViewMode) => {
    if (next === view) return;
    // fade out
    setIsViewSwitching(true);
    window.setTimeout(() => {
      setView(next);
      // next tick: fade in
      window.requestAnimationFrame(() => setIsViewSwitching(false));
    }, 180);
  };

  // Data mode: overview uses the problems dataset for structure/categories
  const dataMode: FlowModeKey = view === "solutions" ? "solutions" : "problems";

  const categories = useMemo(() => {
    return Object.entries(SIGNAL_FLOW[dataMode]) as Array<
      [FlowCategoryKey, (typeof SIGNAL_FLOW)[FlowModeKey][string]]
    >;
  }, [dataMode]);

  const [activeCategory, setActiveCategory] = useState<FlowCategoryKey>("");

  // Macro beacon run key (category/view changes)
  const [macroRunKey, setMacroRunKey] = useState(0);

  // Micro beacon run (card click)
  const [microRunKey, setMicroRunKey] = useState(0);
  const [microLane, setMicroLane] = useState<LaneKey | null>(null);

  // Keep activeCategory valid when switching dataMode
  useEffect(() => {
    const keys = Object.keys(SIGNAL_FLOW[dataMode] ?? {});
    if (keys.length === 0) return;

    if (!activeCategory || !SIGNAL_FLOW[dataMode]?.[activeCategory]) {
      setActiveCategory(keys[0] as FlowCategoryKey);
    }
  }, [dataMode, activeCategory]);

  // Kick macro run when view OR category changes (but not on first mount until category exists)
  useEffect(() => {
    if (!activeCategory) return;
    setMacroRunKey((k) => k + 1);
  }, [view, activeCategory]);

  const active = activeCategory ? SIGNAL_FLOW[dataMode][activeCategory] : null;

  // Accent colors based on view
  const accentHex = view === "problems" ? "#ef4444" : view === "solutions" ? "#10b981" : "#94a3b8"; // slate-400 for overview
  const accentText =
    view === "problems" ? "text-red-600" : view === "solutions" ? "text-emerald-600" : "text-slate-600";

  const beaconShadow =
    view === "problems"
      ? "drop-shadow-[0_0_16px_rgba(239,68,68,0.55)]"
      : view === "solutions"
      ? "drop-shadow-[0_0_16px_rgba(16,185,129,0.55)]"
      : "drop-shadow-[0_0_14px_rgba(148,163,184,0.45)]";

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-8 py-20">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-[11px] tracking-[0.3em] uppercase text-slate-500">Full Flow Map</div>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Structure turns turbulence into intention.</h2>
          <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
            This map shows how pressure propagates across leadership, operations, and financial risk — and what it looks
            like when the system is rebuilt to move work cleanly again.
          </p>
        </div>

        {/* View toggle */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="inline-flex border border-slate-200 bg-white">
              <SquareToggle active={view === "overview"} onClick={() => requestViewChange("overview")} label="Overview" />
              <SquareToggle active={view === "problems"} onClick={() => requestViewChange("problems")} label="Problems" />
              <SquareToggle active={view === "solutions"} onClick={() => requestViewChange("solutions")} label="Solutions" />
            </div>
          </div>
          {/* Category bar (segmented slider, horizontal scroll) */}
          {categories.length > 0 && (
            <div className="mt-8 flex justify-center">
              <div className="max-w-full overflow-x-auto">
                <div className="inline-flex border border-slate-200 bg-white whitespace-nowrap">
                  {categories.map(([key, cat]) => {
                    const isActive = key === activeCategory;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveCategory(key)}
                        className={[
                          "px-4 py-2 text-[11px] font-bold tracking-[0.14em] uppercase transition-colors",
                          "cursor-pointer whitespace-nowrap",
                          isActive ? "bg-slate-900 text-white" : "bg-white text-slate-600 hover:text-slate-900",
                        ].join(" ")}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
</div>

        {/* Map shell (frame stays around cards/spine only) */}
        <div
          className={[
            "relative border border-slate-200",
            "bg-gradient-to-b from-white to-slate-50/60",
            "px-8 pt-12 pb-10",
          ].join(" ")}
        >
          {/* Spine behind everything */}
          <SpineSVG
            accentHex={accentHex}
            beaconShadow={beaconShadow}
            macroRunKey={macroRunKey}
            microRunKey={microRunKey}
            microLane={microLane}
            view={view}
          />

          {/* Columns */}
          <div
            className={[
              "relative z-10 grid grid-cols-3 gap-16",
              "transition-[opacity,transform] duration-200 ease-out",
              isViewSwitching ? "opacity-0 translate-y-[6px]" : "opacity-100 translate-y-0",
            ].join(" ")}
          >
            <Lane
              laneKey="people"
              title={LANE_META.people.title}
              subtitle={LANE_META.people.subtitle}
              cards={(active?.lanes.people ?? []) as FlowCard[]}
              view={view}
              accentHex={accentHex}
              onCardClick={() => {
                setMicroLane("people");
                setMicroRunKey((k) => k + 1);
              }}
            />
            <Lane
              laneKey="systems"
              title={LANE_META.systems.title}
              subtitle={LANE_META.systems.subtitle}
              cards={(active?.lanes.systems ?? []) as FlowCard[]}
              view={view}
              accentHex={accentHex}
              onCardClick={() => {
                setMicroLane("systems");
                setMicroRunKey((k) => k + 1);
              }}
            />
            <Lane
              laneKey="financial"
              title={LANE_META.financial.title}
              subtitle={LANE_META.financial.subtitle}
              cards={(active?.lanes.financial ?? []) as FlowCard[]}
              view={view}
              accentHex={accentHex}
              onCardClick={() => {
                setMicroLane("financial");
                setMicroRunKey((k) => k + 1);
              }}
            />
          </div>
        </div>

        {/* Belief Line */}
        <div className="mt-20 text-center">
          <div className="text-[11px] tracking-[0.3em] uppercase text-slate-500">SignalQo belief</div>

          <p className="mt-6 text-3xl md:text-4xl font-semibold text-slate-900">
            Most businesses aren’t short-staffed — they’re short-structured.
          </p>

          <p className="mt-4 text-2xl font-medium text-slate-700">
            When the workday settles from turbulence into <span className={`${accentText} font-semibold`}>intention</span>,
          </p>

          <p className="mt-3 text-base text-slate-600">everything that was out of reach becomes possible again.</p>
        </div>

      </div>
    </section>
  );
}

function SquareToggle({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "px-5 py-2 text-[11px] font-bold tracking-[0.18em] uppercase transition-colors",
        "cursor-pointer",
        active ? "bg-slate-900 text-white" : "bg-white text-slate-600 hover:text-slate-900",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function Lane({
  laneKey,
  title,
  subtitle,
  cards,
  view,
  accentHex,
  onCardClick,
}: {
  laneKey: LaneKey;
  title: string;
  subtitle: string;
  cards: FlowCard[];
  view: ViewMode;
  accentHex: string;
  onCardClick: () => void;
}) {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>

      <div className="space-y-8">
        {cards.map((card, idx) => (
          <SlideUpCard
            key={`${laneKey}-${idx}`}
            title={card.title}
            text={pickCardText(card, view)}
            accentHex={accentHex}
            onClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
}

function SlideUpCard({
  title,
  text,
  accentHex,
  onClick,
}: {
  title: string;
  text: string;
  accentHex: string;
  onClick: () => void;
}) {
  return (
    <div
      className={[
        "relative bg-white border border-slate-200 overflow-hidden",
        "transition-transform duration-200",
        "cursor-pointer group",
        "hover:-translate-y-[2px] hover:scale-[1.01] hover:shadow-[0_10px_26px_rgba(15,23,42,0.12)]",
      ].join(" ")}
      style={{ height: 170 }}
      onClick={onClick}
    >
      <div className="p-5">
        <div className="text-sm font-semibold text-slate-900">{title}</div>

        {/* Accent line under title (this is the red/green/sleek indicator) */}
        <div className="mt-2 h-px w-12" style={{ backgroundColor: accentHex }} />

        {/* Small preview line on the card face */}
        <div className="mt-3 text-[12.5px] leading-snug text-slate-600 line-clamp-2">{text}</div>
      </div>

      {/* slide-up panel */}
      <div
        className={[
          "absolute inset-x-0 bottom-0 h-[80%]",
          "translate-y-full group-hover:translate-y-0",
          "transition-transform duration-300",
          "bg-slate-900 text-white",
        ].join(" ")}
      >
        <div className="p-5 text-sm leading-relaxed">{text}</div>
      </div>
    </div>
  );
}

function pickCardText(card: FlowCard, view: ViewMode) {
  if (view === "problems") return card.problem ?? card.detail ?? "";
  if (view === "solutions") return card.solution ?? card.detail ?? "";
  return card.overview ?? card.detail ?? "";
}

function SpineSVG({
  view,
  accentHex,
  beaconShadow,
  macroRunKey,
  microRunKey,
  microLane,
}: {
  view: ViewMode;
  accentHex: string;
  beaconShadow: string;
  macroRunKey: number;
  microRunKey: number;
  microLane: LaneKey | null;
}) {
  /**
   * Geometry notes:
   * - SVG covers: lanes + belief (so exit line continues down behind belief).
   * - We'll draw:
   *   1) Outer square backbone frame
   *   2) Top rail + split to 3 columns
   *   3) 3 vertical lanes (behind cards)
   *   4) Exit from bottom-center down through belief and out
   *
   * Beacon runs:
   * - Macro: 3 beacons run down each lane simultaneously (staggered) to bottom-center; then 1 continues down exit.
   * - Micro: 1 beacon runs only the clicked lane to bottom-center; then continues down exit.
   */

  // ViewBox
  const vbW = 1000;
  const vbH = 820;

  /**
   * Square-track spine geometry (orthogonal / 90-degree turns)
   *
   * Top trunk (center) drops to the top rail, splits into 3 lanes, runs down behind each column,
   * then rejoins at the bottom rail and returns to the center trunk.
   *
   * Beacon follows this exact track.
   */

  // Lane x positions (aligned to the 3 columns)
  const xLeft = 180;
  const xMid = 500;
  const xRight = 820;

  // Key y positions
  const yBeacon = 74;   // origin point (near top of the frame)
  const yRailTop = 126; // top rail (just above first cards)
  const yRailBot = 776; // bottom rail (just above frame bottom)
  const yExit = 812;    // bottom of the shell

  // Spine styling (thin + subtle)
  const spineStroke = "rgba(226,232,240,0.50)"; // ~slate-200/50
  const spineStrokeWidth = 1.5;

  // Spine path: center trunk + top rail + 3 verticals + bottom rail + exit trunk
  const spinePath = [
    // center trunk to top rail
    `M${xMid} ${yBeacon} V${yRailTop}`,
    // top rail across all 3 lanes
    `M${xLeft} ${yRailTop} H${xRight}`,
    // vertical spines down each lane
    `M${xLeft} ${yRailTop} V${yRailBot}`,
    `M${xMid} ${yRailTop} V${yRailBot}`,
    `M${xRight} ${yRailTop} V${yRailBot}`,
    // bottom rail rejoin
    `M${xLeft} ${yRailBot} H${xRight}`,
    // exit trunk down the center
    `M${xMid} ${yRailBot} V${yExit}`,
  ].join(" ");

  // Motion paths (macro/micro beacons) — center trunk → top rail → lane → bottom rail → center trunk
  const pathLeft = `M${xMid} ${yBeacon} V${yRailTop} H${xLeft} V${yRailBot} H${xMid} V${yExit}`;
  const pathMid = `M${xMid} ${yBeacon} V${yRailTop} H${xMid} V${yRailBot} H${xMid} V${yExit}`;
  const pathRight = `M${xMid} ${yBeacon} V${yRailTop} H${xRight} V${yRailBot} H${xMid} V${yExit}`;

  const showBeacons = view === "problems" || view === "solutions" || view === "overview";

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${vbW} ${vbH}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={spinePath} fill="none" stroke={spineStroke} strokeWidth={spineStrokeWidth} />

      {/* Beacon origin */}
      <g className={beaconShadow}>
        <circle cx={xMid} cy={yBeacon} r="7" fill={accentHex} opacity="0.18" />
        <circle cx={xMid} cy={yBeacon} r="3.5" fill={accentHex} />
      </g>

      {/* Define motion paths */}
      <path id="sf-path-left" d={pathLeft} fill="none" stroke="none" />
      <path id="sf-path-mid" d={pathMid} fill="none" stroke="none" />
      <path id="sf-path-right" d={pathRight} fill="none" stroke="none" />

      {/* Macro run: 3 beacons */}
      {showBeacons && (
        <g key={`macro-${macroRunKey}`} className={beaconShadow}>
          <Beacon mpath="#sf-path-left" color={accentHex} dur="5.6s" begin="0s" />
          <Beacon mpath="#sf-path-mid" color={accentHex} dur="5.3s" begin="0.15s" />
          <Beacon mpath="#sf-path-right" color={accentHex} dur="5.6s" begin="0.3s" />
        </g>
      )}

      {/* Micro run: 1 beacon for clicked lane */}
      {microLane && (
        <g key={`micro-${microRunKey}`} className={beaconShadow}>
          {microLane === "people" && <Beacon mpath="#sf-path-left" color={accentHex} dur="5.6s" begin="0s" />}
          {microLane === "systems" && <Beacon mpath="#sf-path-mid" color={accentHex} dur="5.3s" begin="0s" />}
          {microLane === "financial" && <Beacon mpath="#sf-path-right" color={accentHex} dur="5.6s" begin="0s" />}
        </g>
      )}
    </svg>
  );
}

function Beacon({
  mpath,
  color,
  dur,
  begin,
}: {
  mpath: string;
  color: string;
  dur: string;
  begin: string;
}) {
  return (
    <>
      {/* pulse */}
      <circle r="10" fill={color} opacity="0.14">
        <animate attributeName="r" values="10;16;10" dur="1.1s" repeatCount="indefinite" begin={begin} />
        <animate attributeName="opacity" values="0.16;0.06;0.16" dur="1.1s" repeatCount="indefinite" begin={begin} />
        <animateMotion dur={dur} repeatCount="1" rotate="auto" begin={begin}>
          <mpath href={mpath} />
        </animateMotion>
      </circle>

      {/* core */}
      <circle r="5.5" fill={color}>
        <animateMotion dur={dur} repeatCount="1" rotate="auto" begin={begin}>
          <mpath href={mpath} />
        </animateMotion>
      </circle>
    </>
  );
}
