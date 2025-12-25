// Website/src/components/landing/SignalQoWhy.tsx

export default function SignalQoWhy() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-100">

      {/* Center spine - Preserved exactly as requested */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-slate-300/50"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-16 text-center">
        <h2 className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
          Why SignalQo Exists
        </h2>

        <div className="mt-6 text-2xl md:text-[26px] font-medium leading-relaxed text-slate-900">
          <p>
            We believe small business owners shouldn't be targets.
            <span className="block">
              <strong>Targets for a marketplace designed to favor the Goliaths.</strong>
            </span>
          </p>

          <p className="mt-3">
            You are the backbone of the economy, yet the environment is
            <strong> built for you to fail.</strong>
          </p>

          <p className="mt-3">
            We exist to level the playing field – giving you the strategic weapons
            usually reserved for enterprise, so you can
            <strong> stop surviving the terrain and start leading it.</strong>
          </p>
        </div>

        <div className="mt-20 max-w-4xl mx-auto border-t border-slate-300/50" />
      </div>
    </section>
  );
}
