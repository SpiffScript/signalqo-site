import React, { useEffect, useMemo, useRef, useState } from "react";
import { AlertTriangle, Link2Off, Compass, HardHat } from "lucide-react";

type PainCard = {
  key: string;
  title: string;
  subtitle: string;
  body: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function grainDataUri(): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220">
      <filter id="n">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      </filter>
      <rect width="220" height="220" filter="url(#n)" opacity="0.55"/>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function OperatorPain() {
  const noiseUrl = useMemo(() => grainDataUri(), []);

  const cards: PainCard[] = useMemo(
    () => [
      {
        key: "daily-cost",
        title: "The Daily Cost.",
        subtitle: "Stop leading from a place of reaction.",
        body:
          "You know the feeling: the constant fire drills, the urgent 7 AM texts, the late nights spent patching a system that should just work. You aren't just an owner; you've become a full-time, high-stress problem fixer. You’re pouring effort into the business, yet it feels like you're constantly fighting against it. This is the cost of operational noise. It drains your energy, steals your focus, and prevents you from doing the one thing that actually matters: leading the future of your company.",
        Icon: AlertTriangle,
      },
      {
        key: "fragmentation-tax",
        title: "The Fragmentation Tax.",
        subtitle: "Why effort does not equal growth.",
        body:
          "You’ve bought the technology. You’ve hired the teams. Yet, when something breaks—a network hiccup, a website crash, a procedural error—you get vendor finger-pointing, not solutions. You're left managing a web of disconnected systems and services that weren't built to communicate. You have invested in parts, but you never received the necessary blueprint. This fragmentation is not a coincidence; it’s a tax on every decision you make, forcing you to guess instead of operate with certainty.",
        Icon: Link2Off,
      },
      {
        key: "operators-mandate",
        title: "The Operator’s Mandate.",
        subtitle: "What disciplined operations require.",
        body:
          "To break the cycle of noise, you must shift your focus from heroic fixes to systemic stability. This requires a new, disciplined way of thinking about your business. Not what you could do, but what you must do. Clarity to see what actually matters. Reliability to protect your revenue. Stability to enable real, defensible growth. This isn't theoretical advice; it is the fundamental, experience-earned philosophy that protects every strong business from chaos.",
        Icon: Compass,
      },
      {
        key: "execution-barrier",
        title: "The Execution Barrier.",
        subtitle: "Why generic consulting fails operators.",
        body:
          "You need more than a theory or a binder full of reports. You need a partner who understands the difference between an idea and an execution plan. You need advice that is operator-led, experience-earned, and execution-focused. You need systems designed by someone who has sat in your chair and knows what it takes to build discipline that holds up under pressure. Your business requires a strategic framework that is grounded, direct, and ready to implement—no fluff, no buzzwords, and no fear-based selling.",
        Icon: HardHat,
      },
    ],
    []
  );

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setVisibleCount(mq.matches ? 2 : 1);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!scrollerRef.current) return;
    const el = scrollerRef.current;

    const measure = () => {
      const firstCard = el.querySelector<HTMLElement>("[data-card]");
      if (!firstCard) return;
      const w = firstCard.getBoundingClientRect().width;
      if (w > 0) setCardWidth(w);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [visibleCount]);

  const maxIndex = Math.max(0, cards.length - visibleCount);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !cardWidth) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const raw = el.scrollLeft / cardWidth;
        setActiveIndex(clamp(Math.round(raw), 0, maxIndex));
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, [cardWidth, maxIndex]);

  const scrollToIndex = (i: number) => {
    if (!scrollerRef.current || !cardWidth) return;
    scrollerRef.current.scrollTo({
      left: clamp(i, 0, maxIndex) * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative z-10 rounded-none border border-slate-200 bg-white shadow-sm">
      <div className="relative rounded-none border-t border-slate-200 px-6 pb-6 pt-6 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-none opacity-[0.1] mix-blend-multiply"
          style={{
            backgroundImage: `url("${noiseUrl}")`,
            backgroundRepeat: "repeat",
            backgroundSize: "220px 220px",
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-none opacity-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(241,245,249,0.85) 60%, rgba(241,245,249,1) 100%)",
          }}
        />

        <div className="relative z-10 w-full max-w-full overflow-hidden rounded-none">

          <div className="overflow-hidden">
            <div
              ref={scrollerRef}
              className={[
                "flex w-full gap-6 overflow-x-auto",
                "snap-x snap-mandatory scroll-smooth",
                "[scrollbar-width:none] [-ms-overflow-style:none]",
                "[&::-webkit-scrollbar]:hidden",
              ].join(" ")}
            >
              {cards.map((c) => (
                <article
                  key={c.key}
                  data-card

                  className={[
                    "snap-start",
                    "w-full flex-none shrink-0 max-w-full lg:w-[calc((100%-24px)/2)]",
                    "rounded-sm border border-slate-200 bg-white",
                    "p-6 shadow-sm transition-transform transition-shadow duration-200",
                    "hover:-translate-y-1 hover:shadow-lg",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 rounded-sm border border-slate-200 bg-slate-50 p-3">
                      <c.Icon className="h-5 w-5 text-slate-700" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900">
                        {c.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{c.subtitle}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-slate-700">
                    {c.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={[
                  "h-2.5 w-2.5 rounded-full transition-all",
                  i === activeIndex
                    ? "bg-slate-900"
                    : "bg-slate-300 hover:bg-slate-400",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
