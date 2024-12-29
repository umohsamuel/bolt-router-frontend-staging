import { Navbar } from "@/components/navbar";
import { BaseSwitcher } from "@/components/switcher";
import { navbarHeight } from "@/consts";

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
      <BaseSwitcher options={options} prePath="/protocol" />
      <div className="flex w-full max-w-[656px]">{children}</div>
    </div>
  );
}

const options = [
  { value: "stable", label: "Stable Asset" },
  { value: "non-stable", label: "Non Stable Asset" },
];
