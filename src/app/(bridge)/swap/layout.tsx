import { Navbar } from "@/components/navbar";
import { RecentTransactions } from "@/components/screens/cross-swap";
import { BaseSwitcher } from "@/components/switcher";
import { CrossSwapTimeline } from "@/components/timeline";
import { navbarHeight } from "@/consts";
import { routes } from "@/lib/routes";

interface BridgeLayoutProps {
  children: Readonly<React.ReactNode>;
}

export default function BridgeLayout({ children }: BridgeLayoutProps) {
  return (
    <div
      style={{
        paddingTop: `${navbarHeight}px`,
        paddingBottom: `${navbarHeight}px`,
      }}
      className="flex min-h-screen flex-col items-center bg-[#080A18]"
    >
      <Navbar mainBackgroundColor="#192134" className="" />
      <div className="mx-auto flex w-full max-w-screen-large-max flex-col justify-center px-[5%] lg:flex-row large-max:px-0">
        <div className="flex w-full max-w-[656px] flex-col items-start gap-[30px]">
          <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-center lg:gap-0">
            <BaseSwitcher options={options} prePath={routes.crossSwap.base} />
            <RecentTransactions />
          </div>

          {children}
        </div>
        <div className="w-full max-w-[360px] lg:pt-24">
          <CrossSwapTimeline />
        </div>
      </div>
    </div>
  );
}

const options = [
  { value: "stable", label: "Stable Asset" },
  { value: "non-stable", label: "Non Stable Asset" },
];
