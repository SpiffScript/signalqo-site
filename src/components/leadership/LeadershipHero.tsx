import { CtaButton } from "../ui/CtaButton";
import { scrollToId } from "../ui/scroll";

export default function LeadershipHero() {
  return (
    <section className="relative bg-black overflow-hidden min-h-[78vh] md:min-h-[84vh]">
      {/* Background (full-bleed) */}
      <div className="absolute inset-0 z-0">
        {/* Full-bleed image (acts like a background) */}
        <img
          src="/images/leadership/leadership-structure-foundation.png"
          alt=""
          aria-hidden="true"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-[78%_55%]
          "
          draggable={false}
        />

        {/* Global darken (keep light; do NOT crush the structure) */}
        <div className="absolute inset-0 bg-black/[0.03]" />

        {/* LEFT fade (smooth, no hard seam) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />

        {/* TOP edge fade (lighten/darken here) */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-20 bg-gradient-to-b from-black/50 via-black/25 to-transparent" />

        {/* BOTTOM edge fade (waterline feel) */}
        <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[78vh] md:min-h-[84vh] max-w-7xl px-6 md:px-8">
        {/* Vertical centering lives here */}
        <div className="flex w-full items-center">
          {/* Nudge up/down from center: tweak this one line */}
          <div className="w-full max-w-3xl mt-6 md:mt-16">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.12]">
              What you build,
              <br />
              determines what others
              <br />
              can stand on.
            </h1>

            <p className="mt-6 max-w-xl text-base text-slate-200/90 md:text-lg">
              Leadership gets heavy long before it breaks.
              <br />
              Building for others means carrying the weight of every decision.
            </p>

            <div className="mt-8">
              <CtaButton
                type="button"
                variant="navy"
                onClick={() => scrollToId("leadership-services")}
              >
                Explore the work
              </CtaButton>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer so the hero keeps height even if content is short */}
      <div className="relative z-10 h-24 md:h-28" />
    </section>
  );
}
