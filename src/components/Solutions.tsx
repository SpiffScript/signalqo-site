import SolutionsHero from "./solutions/SolutionsHero";
import SolutionsIntro from "./solutions/SolutionsIntro";
import BusinessSystemStability from "./solutions/BusinessSystemStability";
import HumanLoadReduction from "./solutions/HumanLoadReduction";
import SolutionsSystemsBlock from "./solutions/SolutionsSystemsBlock";
import BackToTop from "../components/ui/BackToTop";

export default function Solutions() {
  return (
    <main data-theme="dark-section" className="bg-slate-950">
      <SolutionsHero />
      <SolutionsIntro />
      <BusinessSystemStability />
      <HumanLoadReduction />

      <SolutionsSystemsBlock />

      <BackToTop />
    </main>
  );
}
