import { HomeLayout } from "@/components/layouts";
import {
  FeaturesHome,
  GetStarted,
  HeroHome,
  IntroductionHome,
  KeyMetricsHome,
  PoweredBy,
  // ProtocolIntregration,
  SupportedChains,
} from "@/components/screens";

export default function About() {
  return (
    <HomeLayout className="mb-8 flex flex-col gap-y-8 lg:mb-24 lg:gap-y-24">
      <HeroHome />
      <PoweredBy />
      <IntroductionHome />
      <FeaturesHome />
      <SupportedChains />
      <KeyMetricsHome />
      <GetStarted />
    </HomeLayout>
  );
}
