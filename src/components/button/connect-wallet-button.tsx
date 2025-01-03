"use client";

import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import BaseButton from "./base-button";
import { cn, formatBalance, formatWalletAddress } from "@/utils";
import { useAccount, useBalance } from "wagmi";
import { AddressDetailsModal } from "../modals";
import { useState } from "react";
import ClientOnly from "../layouts/client-only";

interface ConnectWalletBtnProps {
  className?: Readonly<string>;
  text?: Readonly<string>;
}

export default function ConnectWalletBtn({
  className,
  text = "Connect Wallet",
}: ConnectWalletBtnProps) {
  const { isConnected, status } = useAppKitAccount();
  const { address, connector } = useAccount();
  const { open } = useAppKit();
  const { data: balance } = useBalance({
    address,
  });
  const [openAddressDetails, setOpenAddressDetails] = useState(false);

  if (isConnected) {
    return (
      <ClientOnly>
        <div className="flex items-center gap-3 rounded-xl bg-[#131A2A] p-1">
          <span className="flex shrink-0 items-center gap-2 pl-2 font-mono text-sm font-bold text-white">
            {balance &&
              `${formatBalance(balance.value, balance.decimals)} ${balance.symbol}`}
          </span>
          <BaseButton
            text={address ? formatWalletAddress(address) : text}
            className={cn(
              `flex flex-row-reverse items-center gap-2 font-mono text-sm font-bold`,
              className
            )}
            onClick={() => setOpenAddressDetails(true)}
            isLoading={
              typeof connector === "undefined"
                ? false
                : status === "connecting" || status === "reconnecting"
            }
          />
          <AddressDetailsModal
            isOpen={openAddressDetails}
            setIsOpen={setOpenAddressDetails}
          />
        </div>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <BaseButton
        text={text}
        className={className}
        onClick={async () => await open()}
        isLoading={
          typeof connector === "undefined"
            ? false
            : status === "connecting" || status === "reconnecting"
        }
      />
    </ClientOnly>
  );
}
