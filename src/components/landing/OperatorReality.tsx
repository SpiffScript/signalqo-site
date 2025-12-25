// src/components/landing/OperatorReality.tsx
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../types"; // Consistency fix
import OperatorPain from "./OperatorPain";
import OperatorTruths from "./OperatorTruths";

export default function OperatorReality() {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-100 w-full">
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-8 pb-12">
        {/* Preserved spine line - Note: Check visual alignment with grid columns */}
        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-slate-300/50 z-0"
          aria-hidden="true"
        />

        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            The Cost of Noise
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Operators don’t need more effort. They need less friction.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-8 lg:grid-cols-12 items-start max-w-full overflow-hidden">
          {/* Left column */}
          <div className="lg:col-span-8 space-y-6 min-w-0 overflow-hidden">
            <OperatorPain />

            {/* CTA panel */}
            <div className="relative z-10 rounded-none border border-slate-300/50 bg-slate-50 p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-3xl font-bold text-slate-900">
                    Continue the conversation
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                    If this feels familiar, keep going. We’ll map what matters
                    and remove the friction.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => navigate(RoutePath.SERVICES)}
                  className="inline-flex items-center justify-center rounded-sm border border-slate-300 bg-white px-6 py-2 text-sm font-semibold
                  text-slate-900 shadow-sm transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-4">
            <OperatorTruths />
          </div>
        </div>
      </div>
    </section>
  );
}
