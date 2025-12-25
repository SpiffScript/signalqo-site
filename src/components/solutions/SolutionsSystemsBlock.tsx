import SystemIntegration from "./SystemIntegration";
import SolutionsEntryPoint from "./SolutionsEntryPoint";

export default function SolutionsSystemsBlock() {
  return (
    <div className="relative">
      {/* Section 1 */}
      <SystemIntegration />

      {/* Anchor: seam between the two sections */}
      <div className="relative">
        <div id="solutions-image-anchor" className="hidden lg:block h-0" />

        {/* Right-side media locked to the seam (stationary relative to this block) */}
        <div className="hidden lg:block pointer-events-none absolute left-0 right-0 top-0 z-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            {/* Right column aligned to page max width */}
            <div className="absolute right-0 -translate-y-1/2">
              {/* Frame */}
              <div className="bg-white/95 border border-slate-200 p-3 rounded-sm shadow-2xl">
                {/* Image block (frame matches image) */}
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

      {/* Section 2 */}
      <SolutionsEntryPoint />
    </div>
  );
}
