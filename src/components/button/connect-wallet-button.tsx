"use client";

import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";
import BaseButton from "./base-button";
import { cn, formatWalletAddress } from "@/utils";
import { LogOut } from "lucide-react";

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
          `flex flex-row-reverse items-center gap-2 font-mono text-sm font-bold`,
          className
        )}
        onClick={async () => await disconnect()}
        isLoading={status === "connecting" || status === "reconnecting"}
        icon={<LogOut size={18} color="white" />}
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
