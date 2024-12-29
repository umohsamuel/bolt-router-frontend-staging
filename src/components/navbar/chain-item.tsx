import { cn } from "@/utils";
import Image from "next/image";
import { FC } from "react";

interface ChainItemProps {
  logoURL: Readonly<string>;
  name: Readonly<string>;
  className?: Readonly<string>;
}

export const ChainItem: FC<ChainItemProps> = ({ logoURL, name, className }) => {
  return (
    <div className={cn(`flex items-center gap-2 px-4 py-3`, className)}>
      <Image src={logoURL} alt="chain logo" width={24} height={24} />
      <span className="text-sm font-semibold text-white">{name}</span>
    </div>
  );
};
