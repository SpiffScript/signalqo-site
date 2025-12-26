import SystemIntegration from "./SystemIntegration";
import SolutionsEntryPoint from "./SolutionsEntryPoint";

export default function SolutionsSystemsBlock() {
  return (
    <div className="relative">
      <SystemIntegration />

      <div className="relative">
        <div id="solutions-image-anchor" className="hidden lg:block h-0" />

        <div className="hidden lg:block pointer-events-none absolute left-0 right-0 top-0 z-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="absolute right-0 -translate-y-1/2">
              <div className="bg-white/95 border border-slate-200 p-3 rounded-sm shadow-2xl">
                <div className="w-[440px] h-[720px] rounded-sm overflow-hidden">
                  <img
                    src="/images/solutions/system-integration-archive.jpg"
                    alt="Archive aisle"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SolutionsEntryPoint />
    </div>
  );
}
