"use client";

import { formatBalance } from "@/utils";
import { useCallback, useState } from "react";
import { useBalance } from "wagmi";
import { ChevronDown } from "lucide-react";
import { useAccount } from "wagmi";
import { SelectTokenModal } from "@/components/modals";

interface CrossSwapInputProps {
  swapAction: "from" | "to";
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export default function CrossSwapInput({
  swapAction,
  value,
  setValue,
}: CrossSwapInputProps) {
  const [openTokenModal, setOpenTokenModal] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [selectedToken, setSelectedToken] = useState("");

  // const { connector, address } = useAccount();
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });

  const onMax = useCallback(() => {
    if (balance) {
      setValue(formatBalance(balance.value, balance.decimals));
    }
  }, [balance]);

  const onNetworkSelect = useCallback((network: string) => {
    setSelectedNetwork(network);
  }, []);

  const onTokenSelect = useCallback((token: string) => {
    setSelectedToken(token);
    setOpenTokenModal(false);
  }, []);

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2">
          <span className="capitalize">{swapAction}</span>
          <span>{selectedNetwork || "--"}</span>
        </p>

        {
          <button
            onClick={() => setOpenTokenModal(true)}
            className="flex items-center gap-1 text-sm font-semibold text-[#DCDCE4]"
          >
            {selectedToken ? (
              selectedToken
            ) : (
              <>
                Select Token <ChevronDown size={18} color="white" />
              </>
            )}
          </button>
        }
      </div>
      <div className="h-16 w-full rounded-xl bg-[#192134] text-sm font-normal text-[#9B9B9B]">
        <input
          type="number"
          className="h-full w-full rounded-xl border-none bg-transparent text-center font-mono outline-none"
          value={isNaN(value) ? "" : value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          placeholder="0.00"
        />
      </div>
      <p className="flex items-center gap-2 text-xs font-normal text-[#EEEFFB]">
        Balance: {balance?.value}{" "}
        <button onClick={onMax} className="font-bold uppercase text-[#3D6EFF]">
          max
        </button>
      </p>

      <SelectTokenModal
        isOpen={openTokenModal}
        setIsOpen={setOpenTokenModal}
        selectedToken={selectedToken}
        selectedNetwork={selectedNetwork}
        onNetworkSelect={onNetworkSelect}
        onTokenSelect={onTokenSelect}
      />
    </div>
  );
}
