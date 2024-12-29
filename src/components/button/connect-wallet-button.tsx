"use client";

import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";
import BaseButton from "./base-button";
import { cn, formatWalletAddress } from "@/utils";

interface ConnectWalletBtnProps {
  className?: Readonly<string>;
  text?: Readonly<string>;
}

export default function ConnectWalletBtn({
  className,
  text = "Connect Wallet",
}: ConnectWalletBtnProps) {
  const { address, isConnected, status } = useAppKitAccount();
  const { open } = useAppKit();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <BaseButton
        text={address ? formatWalletAddress(address) : text}
        className={cn(
          `bg-red-500 bg-gradient-to-r from-red-500 to-red-500`,
          className
        )}
        onClick={async () => await disconnect()}
        isLoading={status === "connecting" || status === "reconnecting"}
      />
    );
  }

  return (
    <BaseButton
      text={text}
      className={className}
      onClick={async () => await open()}
      isLoading={status === "connecting" || status === "reconnecting"}
    />
  );
}
