"use client";

import BaseButton from "./base-button";
import { appKitModalInstance } from "@/context/wagmi";

interface ConnectWalletBtnProps {
  className?: Readonly<string>;
  text?: Readonly<string>;
}

export default function ConnectWalletBtn({
  className,
  text = "Connect Wallet",
}: ConnectWalletBtnProps) {
  return (
    <BaseButton
      text={text}
      className={className}
      onClick={() => appKitModalInstance.open()}
    />
  );
}
