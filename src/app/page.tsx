import { HomeLayout } from "@/components/layouts";
import { HeroHome, IntroductionHome } from "@/components/screens";

export default function Home() {
  return (
    <HomeLayout>
      <HeroHome />
      <IntroductionHome />
    </HomeLayout>
  );
}
