import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../types";
import { CtaButton } from "../ui/CtaButton";

export default function NextStepsCta() {
  const navigate = useNavigate();

  return (
    <section data-theme="dark-section" className="bg-black py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Ready to get signal back?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/60 border-l-4 border-white/10 pl-6">
            If you want a second set of operator eyes on the situation — and you’re willing to hold a standard —
            let’s start with a straightforward review.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <CtaButton variant="primary" size="md" onClick={() => navigate(RoutePath.CONTACT)}>
              Book Review
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
