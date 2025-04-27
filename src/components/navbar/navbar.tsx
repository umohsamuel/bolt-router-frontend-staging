"use client";

import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib";
import { ConnectWalletBtn } from "../button";
import { ProtocolSelector } from "./chain-item";
import { cn } from "@/utils";
import { usePathname } from "next/navigation";
import { NavScrollWrapper } from "./navWrappers";
import { routes } from "@/lib/routes";

interface NavbarProps {
  className?: Readonly<string>;
  mainBackgroundColor?: Readonly<string>;
}

export default function Navbar({
  className,
  mainBackgroundColor,
}: NavbarProps) {
  const pathname = usePathname();

  return (
    <NavScrollWrapper mainBackgroundColor={mainBackgroundColor}>
      <div
        className={cn(
          `flex w-full items-center justify-between py-3`,
          className
        )}
      >
        <div>
          <Link href={routes.home}>
            <Image
              src="/images/bolt-router-logo.svg"
              alt="bolt-router-logo"
              width={50}
              height={25}
              className="h-[25px] w-auto"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-8 text-sm font-normal text-[#637592] lg:flex">
            {navLinks.map((navlink) => (
              <Link
                href={navlink.link}
                key={navlink.title}
                className={`hover:text-[#366CF0] ${pathname.startsWith(navlink.link) ? "text-[#366CF0]" : ""}`}
              >
                {navlink.title}
              </Link>
            ))}
          </div>

          <ProtocolSelector className="hidden lg:flex" />

          <ConnectWalletBtn className="hidden lg:flex" />
        </div>
      </div>
    </NavScrollWrapper>
  );
}
