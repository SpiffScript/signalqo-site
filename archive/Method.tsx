import { Filter, TrendingUp, ArrowRight } from 'lucide-react';

export default function Method() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
            The SignalQo Method
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A structured process designed to strip away complexity and force clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Filter,
              title: 'Filter the Noise',
              desc: 'Remove distractions, sunk costs, and vanity metrics that distort judgment.',
            },
            {
              icon: TrendingUp,
              title: 'Surface the Signal',
              desc: 'Isolate the variables that actually drive outcomes and expose real risk.',
            },
            {
              icon: ArrowRight,
              title: 'Make the Move',
              desc: 'Define a clear decision sequence with ownership and next actions.',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow rounded-sm"
            >
              <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-6 rounded-sm">
                <card.icon className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {card.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
