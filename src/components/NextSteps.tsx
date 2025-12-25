import NextStepsHero from "./next-steps/NextStepsHero";
import NextStepsGalleryBreak from "./next-steps/NextStepsGalleryBreak";
import EngagementRoadmap from "./next-steps/EngagementRoadmap";
import NextStepsFaq from "./next-steps/NextStepsFaq";
import NextStepsCta from "./next-steps/NextStepsCta";

export default function NextSteps() {
  return (
    <main className="w-full">
      <NextStepsHero />
      <NextStepsGalleryBreak />
      <EngagementRoadmap />
      <NextStepsFaq />
      <NextStepsCta />
    </main>
  );
}
