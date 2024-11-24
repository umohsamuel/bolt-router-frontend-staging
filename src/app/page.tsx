import { HomeLayout } from "@/components/layouts";
import {
  FeaturesHome,
  HeroHome,
  IntroductionHome,
  KeyMetricsHome,
  SupportedChains,
} from "@/components/screens";

export default function Home() {
  return (
    <HomeLayout className="mb-8 flex flex-col gap-y-8 lg:mb-24 lg:gap-y-24">
      <HeroHome />
      <IntroductionHome />
      <KeyMetricsHome />
      <FeaturesHome />
      <SupportedChains />
    </HomeLayout>
  );
}
