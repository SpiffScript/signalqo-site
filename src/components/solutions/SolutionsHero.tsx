import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../types";
import { CtaButton } from "../ui/CtaButton";

export default function SolutionsHero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Outcomes that drive revenue
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Solutions
          </h1>

          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            This page is not a list of offerings. It’s what becomes true when SignalQo
            is inside the system — how work moves, how decisions land, and how pressure
            gets carried without collapsing back onto the owner.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CtaButton variant="primary" onClick={() => navigate(RoutePath.CONTACT)}>
              Book Review
            </CtaButton>

            <button
              onClick={() => navigate(RoutePath.SERVICES)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-sm border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-colors"
            >
              View services
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-slate-700/30 blur-3xl" />
      </div>
    </section>
  );
}
