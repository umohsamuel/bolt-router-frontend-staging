import { FC } from "react";
import { MobileDrawerWrapper } from "./mobileNavWrapper";
import Link from "next/link";
import { navLinks } from "@/lib";
import { BaseButton } from "../button";
import { ChainItem } from "./chain-item";

export interface MobileDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
}

export const MobileDrawer: FC<MobileDrawerProps> = ({
  open,
  setOpen,
  pathname, // eslint-disable-line @typescript-eslint/no-unused-vars
}) => {
  function handleClose() {
    setOpen(false);
  }

  return (
    <MobileDrawerWrapper open={open}>
      <div className="flex w-full flex-col justify-start gap-[42px] bg-[#366CF0] px-[5%] pt-8 text-xl font-semibold text-white lg:hidden">
        {navLinks.map((navlink) => (
          <Link
            href={navlink.link}
            key={navlink.title}
            onClick={handleClose}
            className="hover:text-[#366CF0]"
          >
            {navlink.title}
          </Link>
        ))}

        <div className="flex flex-col gap-6">
          <ChainItem logoURL="/images/favicon.svg" name="BNB Chain" />

          <BaseButton
            text="Connect Wallet"
            className="w-full border border-solid border-white shadow-lg"
          />
        </div>
      </div>
    </MobileDrawerWrapper>
  );
};
