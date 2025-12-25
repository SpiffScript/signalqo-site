import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../types";
import { CtaButton } from "../ui/CtaButton";

export default function AboutCta() {
  const navigate = useNavigate();

  return (
    <section data-theme="dark-section" className="bg-slate-950 py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Ready to take control of your operations?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/60 border-l-4 border-white/10 pl-6">
            Scale your impact, not your workload. Success shouldn't come at the cost of your sanity.
            We specialize in streamlining leadership signals so you can stop managing the day-to-day
            and start leading the future.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <CtaButton variant="navy" size="md" onClick={() => navigate(RoutePath.CONTACT)}>
              Start a Conversation
            </CtaButton>

            <CtaButton variant="primary" size="md" onClick={() => navigate(RoutePath.SERVICES)}>
              View Services
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
