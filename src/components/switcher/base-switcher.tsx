"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

interface BaseSwitcherProps {
  options: ReadonlyArray<{
    label: string;
    value: string;
  }>;
  prePath: Readonly<string>;
}

export default function BaseSwitcher({ options, prePath }: BaseSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="flex w-fit rounded-2xl bg-[#131A2A] p-[6px]">
      {options.map((option) => (
        <Link
          href={option.value}
          key={option.value}
          className={`relative rounded-2xl px-4 py-[13.5px]`}
        >
          <span className="relative z-[2] bg-gradient-to-b from-white/70 to-white bg-clip-text text-base font-semibold text-transparent">
            {option.label}
          </span>

          {pathname === `${prePath}/${option.value}` && (
            <motion.div
              layoutId="switcher-active-status"
              className={`absolute left-0 top-0 z-[1] h-full w-full rounded-2xl border-transparent bg-gradient-to-r from-[#366CF0] via-[#356BF0] to-[#366CF0] shadow-[0px_20px_16px_-8px_rgba(4,163,227,0.38)] before:absolute before:inset-0 before:-z-10 before:rounded-2xl`}
            />
          )}
        </Link>
      ))}
    </div>
  );
}
