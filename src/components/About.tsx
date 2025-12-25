import AboutHero from "./about/AboutHero";
import WhySignalQo from "./about/WhySignalQo";
import WhatsSignal from "./about/WhatsSignal";
import HowWeWork from "./about/HowWeWork";
import WhoItsFor from "./about/WhoItsFor";
import AboutCta from "./about/AboutCta";

export default function About() {
  return (
    <main className="w-full">
      <AboutHero />
      <WhySignalQo />
      <WhatsSignal />
      <HowWeWork />
      <WhoItsFor />
      <AboutCta />
    </main>
  );
}
