import { Navbar } from "@/components/navbar";
import { BaseSwitcher } from "@/components/switcher";
import { navbarHeight } from "@/consts";
import { routes } from "@/lib/routes";

interface ProtocolSelectionLayoutProps {
  children: Readonly<React.ReactNode>;
}

export default function ProtocolSelectionLayout({
  children,
}: ProtocolSelectionLayoutProps) {
  return (
    <div
      style={{
        paddingTop: `${navbarHeight}px`,
        paddingBottom: `${navbarHeight}px`,
      }}
      className="flex min-h-screen flex-col items-center gap-10 bg-[#080A18]"
    >
      <Navbar mainBackgroundColor="#192134" className="" />
      <div className="mx-auto flex w-full max-w-screen-large-max flex-col items-center gap-10 px-[5%] large-max:px-0">
        <BaseSwitcher options={options} prePath={routes.protocol.base} />
        <div className="flex w-full max-w-[656px] px-[5%]">{children}</div>
      </div>
    </div>
  );
}

const options = [
  { value: "stable", label: "Stable Asset" },
  { value: "non-stable", label: "Non Stable Asset" },
];
