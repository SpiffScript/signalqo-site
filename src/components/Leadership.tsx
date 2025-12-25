import LeadershipHero from "../components/leadership/LeadershipHero";
import LeadershipIntent from "../components/leadership/LeadershipIntent";
import LeadershipServices from "../components/leadership/LeadershipServices";
import LeadershipSupport from "../components/leadership/LeadershipSupport";
import BackToTop from "../components/ui/BackToTop";


export default function LeadershipQo() {
  return (
    <main data-theme="dark-section"
      className="bg-slate-950"
      >
      <LeadershipHero />
      <LeadershipIntent />
      <LeadershipServices />
      <LeadershipSupport />

      <BackToTop />
    </main>
  );
}
