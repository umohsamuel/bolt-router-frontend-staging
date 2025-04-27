"use client";

import { routes } from "@/lib/routes";
import { cn } from "@/utils";
import { useProtocolStore } from "@/zustand/providers";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ChainItemProps {
  logoURL: Readonly<string> | Readonly<React.ReactNode>;
  name: Readonly<string>;
  className?: Readonly<string>;
  linkTo?: Readonly<string>;
}

export const ChainItem: FC<ChainItemProps> = ({
  logoURL,
  name,
  linkTo,
  className,
}) => {
  return linkTo ? (
    <Link
      href={linkTo}
      className={cn(`flex items-center gap-2 px-4 py-3`, className)}
    >
      {logoURL && typeof logoURL === "string" ? (
        <Image src={logoURL} alt="chain logo" width={24} height={24} />
      ) : (
        logoURL
      )}
      <span className="text-sm font-semibold text-white">{name}</span>
    </Link>
  ) : (
    <div className={cn(`flex items-center gap-2 px-4 py-3`, className)}>
      {logoURL && typeof logoURL === "string" ? (
        <Image src={logoURL} alt="chain logo" width={24} height={24} />
      ) : (
        logoURL
      )}
      <span className="text-sm font-semibold text-white">{name}</span>
    </div>
  );
};

export const ProtocolSelector = ({
  className,
}: {
  className?: Readonly<string>;
}) => {
  const protocol = useProtocolStore((state) => state.selectedProtocol);

  return (
    <ChainItem
      logoURL={protocol.icon}
      name={protocol.name || "Select Protocol"}
      linkTo={routes.protocol.stable}
      className={className}
    />
  );
};
