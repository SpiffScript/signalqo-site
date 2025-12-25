import founderImg from "../../assets/about/signalqo-founder.png";

export default function AboutHero() {
  return (
    <section className="bg-black pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
          {/* LEFT: Headline + intro copy */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-blue-400/80" />
                <span className="text-blue-400/85 font-mono text-xs tracking-[0.2em] uppercase font-bold">
                  About SignalQo
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              Turn noise into <span className="text-blue-400">signal</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-md leading-relaxed text-white/60">
              SignalQo exists for operators who are tired of “working hard” being the plan.
              Small businesses don’t collapse from lack of effort – they collapse under the weight of
              decisions that never land, ownership that never sticks, and systems that depend on one
              person being present to function. That pressure doesn’t live only at the top. It shows
              up anywhere responsibility exists without structure.
            </p>

            <p className="pt-4 max-w-2xl text-md leading-relaxed text-white/60">
              We build execution systems that hold under load, so operational accountability doesn’t become a
              personal burden.
            </p>

            <div className="mt-8">
              <div className="inline-block">
                {/* Line 1: constrained width ONLY on this line */}
                <p className="text-5xl font-medium leading-tight text-white/85 text-center lg:translate-x-6">
                  Don’t be right – Get it <span className="text-blue-400">right</span>.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Founder image (desktop only) */}
          <div className="hidden lg:block">
            {/* This wrapper MUST NOT have overflow-hidden */}
            <div className="flex justify-end">
              <div className="w-full max-w-[360px]">
                {/* translate ONLY the framed image */}
                <div className="border border-white/10 translate-y-12">
                  <img
                    src={founderImg}
                    alt="SignalQo Founder"
                    className="w-full object-cover"
                  />
                </div>

                {/* caption is OUTSIDE the framed image so it can't get clipped */}
                <p className="mt-16 text-sm leading-relaxed text-white/70 text-center">
                  Built by operators who’ve carried the weight,
                  <br />
                  <span className="font-semibold text-white/80">
                    and refused to normalize it.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
