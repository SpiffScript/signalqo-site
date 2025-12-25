import Hero from './landing/Hero';
import SignalQoWhy from './landing/SignalQoWhy';
import OperatorReality from './landing/OperatorReality';
import SmallBigJobs from './landing/SmallBigJobs';
import ServicesPreview from './landing/ServicesPreview';
import Metrics from './landing/Metrics';
import ErosionGrid from './landing/ErosionGrid';
import SignalDomainsMap from './landing/SignalDomainsMap';
import SignalQoBelief from './landing/SignalQoBelief';

export default function Landing() {
  return (
    <div className="w-full">
      <Hero />
      <SignalQoWhy />
      <OperatorReality />
      <ErosionGrid />
      <SmallBigJobs />
      <ServicesPreview />
      <SignalDomainsMap />
      <SignalQoBelief />
      <Metrics />

    </div>
  );
}
