import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { HorizontalDivider } from "../dividers";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-gradient-to-b from-[#080A18]/[0%] to-[#080A18] to-45%">
      <Navbar />
      <div className="pt-[60px]">{children}</div>
      <HorizontalDivider />
      <Footer />
    </div>
  );
}
