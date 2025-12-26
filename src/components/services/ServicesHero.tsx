import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../types";
import { CtaButton } from "../ui/CtaButton";

export default function ServicesHero() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-black">
      <div className="absolute inset-0">
        <img
          src="/images/services/signal-structure.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex min-h-[75vh] flex-col pt-20 md:pt-24">
          <div className="max-w-3xl">
            <p className="text-sm tracking-wide text-white/60">
              SignalQo • Services
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              When operations stall, it’s usually not effort – it’s signal.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/75">
              SignalQo works inside organizations to restore clarity, stabilize execution,
              and remove the friction that slows decisions and breaks momentum.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <CtaButton
                variant="navy"
                type="button"
                onClick={() => navigate(RoutePath.CONTACT)}
              >
                Request a Signal Review
              </CtaButton>

              <CtaButton
                variant="primary"
                type="button"
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Services
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
