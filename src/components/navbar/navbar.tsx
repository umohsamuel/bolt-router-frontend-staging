import Image from "next/image";
import Link from "next/link";
import { NavScrollWrapper } from "./navWrappers";
import { navLinks } from "@/lib";
import { BaseButton } from "../button";
import { ChainItem } from "./chain-item";

export default function Navbar() {
  return (
    <NavScrollWrapper>
      <div className="flex w-full items-center justify-between py-3">
        <div>
          <Link href="/">
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
                className="hover:text-[#366CF0]"
              >
                {navlink.title}
              </Link>
            ))}
          </div>
          <ChainItem
            logoURL="/images/favicon.svg"
            name="BNB Chain"
            className="hidden lg:flex"
          />
          <BaseButton text="Connect Wallet" className="hidden lg:flex" />
        </div>
      </div>
    </NavScrollWrapper>
  );
}
