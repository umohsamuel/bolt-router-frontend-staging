import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { cn } from "@/utils";

export default function HomeLayout({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div className="bg-gradient-to-b from-[#080A1800] to-[#080A18] to-45%">
      <Navbar />
      <div className={cn(`min-h-screen`, className)}>{children}</div>
      <Footer />
    </div>
  );
}
