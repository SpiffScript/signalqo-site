import type { ReactNode } from "react";

type SolutionsPanelProps = {
  title: ReactNode;
  body: ReactNode;
  sub?: ReactNode;
  className?: string;
};

export default function SolutionsPanel({ title, body, sub, className }: SolutionsPanelProps) {
  return (
    <div className={className ?? "rounded-sm border border-slate-200 bg-white p-6 shadow-sm"}>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <div className="mt-3 text-slate-700 leading-relaxed">
        {body}
      </div>

      {sub ? (
        <div className="mt-4 text-slate-600 leading-relaxed">
          {sub}
        </div>
      ) : null}
    </div>
  );
}
