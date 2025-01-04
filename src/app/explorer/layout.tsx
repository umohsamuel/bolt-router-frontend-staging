import { Navbar } from "@/components/navbar";
import { navbarHeight } from "@/consts";
import React from "react";

interface ExplorerLayoutProps {
  children: ReadonlyArray<React.ReactNode>;
}

export default function ExplorerLayout({ children }: ExplorerLayoutProps) {
  return (
    <div
      style={{
        paddingTop: `${navbarHeight}px`,
        paddingBottom: `${navbarHeight}px`,
      }}
      className="flex min-h-screen flex-col items-center bg-[#080A18]"
    >
      <Navbar mainBackgroundColor="#192134" className="" />
      <div className="w-full pl-[5%] pr-[5%]">{children}</div>
    </div>
  );
}
