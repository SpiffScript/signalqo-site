import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../types";
import { CtaButton } from "../ui/CtaButton";
import { ArrowUpRight } from "lucide-react";

export default function SolutionsEntryPoint() {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-50 py-20 sm:py-24 relative overflow-hidden border-t border-slate-200/70">
      <div className="absolute left-1/2 top-0 w-px h-full bg-slate-200 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-[650px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-blue-600 font-mono text-xs tracking-[0.2em] uppercase font-bold">
              Entry point
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Where this usually starts
          </h2>

          <p className="mt-6 text-lg text-slate-700 leading-relaxed border-l-4 border-slate-300 pl-6">
            Most engagements begin with a focused review – a real look at what’s
            happening, what keeps repeating, and where the pressure actually
            lives. The goal isn’t to diagnose everything. It’s to isolate the
            signal and make the next move obvious.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate(RoutePath.CONTACT)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-sm border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-900"
            >
              See how it works
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <CtaButton
              variant="primary"
              onClick={() => navigate(RoutePath.CONTACT)}
            >
              Talk it through
            </CtaButton>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            We’ll keep this clean. No theater. Just clarity and
            forward motion.
          </p>
        </div>
      </div>
    </section>
  );
}
