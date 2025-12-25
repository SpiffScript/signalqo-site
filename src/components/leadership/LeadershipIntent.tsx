import { useEffect, useRef, useState } from "react";

export default function LeadershipIntent() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  const [hasInteracted, setHasInteracted] = useState(false);
  const [inView, setInView] = useState(false);

  // 1) Do NOT animate unless the user scrolls at least once.
  useEffect(() => {
    const onFirstScroll = () => {
      setHasInteracted(true);
      window.removeEventListener("scroll", onFirstScroll);
    };

    window.addEventListener("scroll", onFirstScroll, { passive: true });

    return () => window.removeEventListener("scroll", onFirstScroll);
  }, []);

  // 2) Only animate when the box is near the viewport (after interaction).
  useEffect(() => {
    if (!boxRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      {
        // Triggers a bit before it fully enters — tweak if needed
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(boxRef.current);

    return () => observer.disconnect();
  }, []);

  const show = hasInteracted && inView;

  return (
    <section className="bg-black">
      {/* Tight spacing so we don't create extra "dead space" under the water */}
      <div className="mx-auto max-w-6xl px-6 pb-10">
        {/* Pull the box up so it can overlap the water area (once it appears) */}
        <div
          ref={boxRef}
          className={[
            "border border-white/10 bg-slate-900 shadow-[0_12px_40px_rgba(0,0,0,0.35)] px-6 py-10 md:px-10",
            "-mt-20 md:-mt-24",
            "transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14",
          ].join(" ")}
        >
          <h2 className="text-xl md:text-3xl font-semibold tracking-tight text-white">
            Leadership pressure doesn’t come from avoidance – it comes from{" "}
            <span className="text-blue-400">ownership.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/70">
            It builds because you are the one who takes responsibility and keeps things moving.
            That weight doesn’t compound because of poor judgment – it compounds because you are
            building something that matters.
          </p>

          <p className="mt-4 text-base leading-relaxed text-white/70">
            To sustain the build, you need a system designed for the pressure.
          </p>
        </div>
      </div>
    </section>
  );
}
