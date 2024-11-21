import Image from "next/image";
import { Navbar } from "../navbar";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative bg-gradient-to-b from-[#080A18]/[0%] to-[#080A18] to-45%">
      <Image
        src="/vectors/home-vector-1.svg"
        alt=""
        width={100}
        height={100}
        className="absolute left-0 top-0 h-auto w-[20%]"
      />
      <Navbar />
      <div className="pt-[60px]">{children}</div>
    </div>
  );
}
