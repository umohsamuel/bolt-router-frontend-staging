"use client";

import { BaseButton, ConnectWalletBtn } from "@/components/button";
import { useCrossSwapStore } from "@/zustand/providers";
import { useAppKitAccount } from "@reown/appkit/react";
import { useCallback, useState } from "react";
import CrossSwapInput from "./cross-swap-input-item";
import Image from "next/image";

export default function CrossSwapContainer() {
  const { isConnected, status } = useAppKitAccount();
  const setTimelineStep = useCrossSwapStore((state) => state.setCrossSwapStore);

  const [fromAmount, setFromAmount] = useState<number>(0.0);
  const [toAmount, setToAmount] = useState<number>(0.0);

  const handleNextStep = useCallback(() => {
    const MIN = 1;
    const MAX = 5;
    setTimelineStep("timelineStep", (prev) => (prev >= MAX ? MIN : prev + 1));
  }, []);

  return (
    <div className="flex w-full flex-col gap-10 rounded-xl bg-[#131A2A] p-10">
      <div className="flex w-full flex-col gap-4">
        <CrossSwapInput
          swapAction="from"
          value={fromAmount}
          setValue={setFromAmount}
        />
        <div className="flex justify-center">
          <Image
            src="/vectors/down-arrow.svg"
            alt="down-arrow"
            width={40}
            height={40}
            draggable={false}
          />
        </div>
        <CrossSwapInput
          swapAction="to"
          value={toAmount}
          setValue={setToAmount}
        />
      </div>

      {isConnected && status !== "reconnecting" && status !== "connecting" ? (
        <BaseButton
          text="Continue"
          className="w-full"
          onClick={handleNextStep}
        />
      ) : (
        <ConnectWalletBtn className="w-full" />
      )}
    </div>
  );
}
