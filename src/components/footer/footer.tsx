import Link from "next/link";
import { FC } from "react";
import { HorizontalDivider } from "../dividers";
import { footerLinksArr, socialMediaLinks } from "@/lib";

export default function Footer() {
  return (
    <footer className="max-w-screen-large-max large-max:px-0 relative z-[1] mx-auto w-full px-[5%] py-8 text-[#CDCDCD]">
      <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:gap-0">
        <div className="flex flex-col items-start gap-4 lg:max-w-[30%]">
          <h1 className="text-[32px] font-semibold leading-tight text-[#DCDCE4]">
            Bolt Router
          </h1>
          <p className="text-base font-normal">
            This platform is a Decentralized Exchange (DEX) designed to make
            cross-chain token swaps seamless, secure, and efficient.
          </p>
          <div className="flex items-center gap-[10px]">
            {socialMediaLinks.map((smLink, index) => (
              <Link
                key={Math.random() + index}
                href={smLink.link}
                target="_blank"
                className="cursor-pointer rounded-full bg-[#131A2A] p-2"
              >
                {smLink.icon && (
                  <smLink.icon size={14} color="#DCDCE4" aria-disabled={true} />
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col justify-between gap-8 lg:max-w-[45%] lg:flex-row lg:gap-0">
          {footerLinksArr.map((footerLink) => (
            <FooterLinkItem
              key={footerLink.title}
              title={footerLink.title}
              links={footerLink.links}
            />
          ))}
        </div>
      </div>

      <HorizontalDivider className="mb-8 mt-14" />

      <p className="text-center text-base font-medium">
        Copyright © {new Date().getFullYear()} Bolt Router
      </p>
    </footer>
  );
}

interface FooterLinkItemProps {
  title: Readonly<string>;
  links: ReadonlyArray<{ linkTitle: string; linkUrl: string }>;
}

const FooterLinkItem: FC<FooterLinkItemProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl font-medium text-[#DCDCE4] 2xl:text-2xl">
        {title}
      </h3>
      <div className="flex flex-col gap-5">
        {links.map((link) => (
          <Link
            key={link.linkTitle}
            aria-disabled={link.linkUrl === ""}
            href={link.linkUrl}
            className={`text-sm font-normal text-[#CDCDCD] 2xl:text-base`}
          >
            {link.linkTitle}
          </Link>
        ))}
      </div>
    </div>
  );
};
