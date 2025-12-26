import { useNavigate } from "react-router-dom";
import { RoutePath } from "./types";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="text-center">
        <p className="text-sm font-mono font-semibold tracking-[0.3em] text-blue-500 uppercase">
          Error 404 // Signal Lost
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          You’ve drifted into the noise.
        </h1>

        <p className="mt-6 text-base leading-7 text-slate-400 max-w-lg mx-auto">
          Whatever you were looking for isn't here. It’s either been decommissioned,
          renamed, or it never existed in the first place – much like your competitor's
          "proprietary growth framework."
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => navigate(RoutePath.HOME)}
            className="rounded-none bg-blue-600 px-8 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-sm hover:bg-blue-500
            transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
          >
            Return to High-Ground
          </button>

          <button
            onClick={() => navigate(RoutePath.CONTACT)}
            className="text-xs font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors cursor-pointer"
          >
            Report a system failure <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        <div className="mt-24 border-t border-white/5 pt-8">
          <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
            Diagnostic: 0% Signal / 100% Static / 1 Doubtful User Action
          </p>
        </div>
      </div>
    </main>
  );
}
