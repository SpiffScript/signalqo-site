export default function Ecosystem() {
  return (
    <section className="py-24 bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Part of the QoLogic Ecosystem
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              name: 'SignalQo',
              tagline: 'Decision clarity',
              desc: 'Isolate the signal. Make the call.',
              active: true,
            },
            {
              name: 'InfraQo',
              tagline: 'Infrastructure & systems',
              desc: 'Connectivity, reliability, and uptime.',
              active: false,
            },
            {
              name: 'IndexQo',
              tagline: 'Visibility & growth',
              desc: 'Search, presence, and performance.',
              active: false,
            },
          ].map((brand) => (
            <div
              key={brand.name}
              className={`relative p-6 border rounded-sm transition-all ${
                brand.active
                  ? 'bg-slate-900 border-blue-900/50 shadow-lg shadow-blue-900/10'
                  : 'bg-transparent border-slate-800 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div
                  className={`w-2 h-2 rounded-full ${
                    brand.active ? 'bg-blue-500' : 'bg-slate-600'
                  }`}
                />
                <h3
                  className={`text-lg font-bold ${
                    brand.active ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {brand.name}
                </h3>
              </div>

              <p className="text-sm font-medium mb-1 text-slate-200">
                {brand.tagline}
              </p>
              <p className="text-xs text-slate-500">{brand.desc}</p>

              {brand.active && (
                <div className="absolute top-0 right-0 p-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
