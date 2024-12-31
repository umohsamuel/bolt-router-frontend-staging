"use client";

import { ModalProps } from "@/types";
import BaseModal from "./base-modal";
import { Search } from "lucide-react";
import Image from "next/image";

interface SelectTokenModalProps extends ModalProps {
  selectedToken: string;
  selectedNetwork: string;

  onNetworkSelect: (network: string) => void;
  onTokenSelect: (token: string) => void;
}

export default function SelectTokenModal({
  isOpen,
  setIsOpen,
  selectedToken,
  selectedNetwork,
  onNetworkSelect,
  onTokenSelect,
}: SelectTokenModalProps) {
  return (
    <BaseModal isOpen={isOpen} setIsOpen={setIsOpen} title="Select Token">
      <div className="flex w-full flex-col gap-[30px] pr-2">
        <SelectTokenSearchInput placeholder="Search Token Name / Symbol / Contract Address" />
        <SelectTokenLayout
          selectedNetwork={selectedNetwork}
          selectedToken={selectedToken}
          onNetworkSelect={onNetworkSelect}
          onTokenSelect={onTokenSelect}
        />
      </div>
    </BaseModal>
  );
}

interface SelectTokenLayoutProps {
  selectedToken: string;
  selectedNetwork: string;

  onNetworkSelect: (network: string) => void;
  onTokenSelect: (token: string) => void;
}

function SelectTokenLayout({
  selectedToken,
  selectedNetwork,
  onNetworkSelect,
  onTokenSelect,
}: SelectTokenLayoutProps) {
  return (
    <div className="relative flex w-full gap-6">
      <div className="sticky top-0 flex h-full w-full max-w-[94px] shrink-0 flex-col gap-5 rounded-xl bg-[#192134] px-4 py-[18px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <NetworkItem
            key={index}
            selected={selectedNetwork === "this nework " + index}
            onClick={() => onNetworkSelect("this nework " + index)}
          />
        ))}
      </div>

      {selectedNetwork && (
        <div className="w-full">
          <h2 className="text-base font-semibold text-[#DCDCE4]">
            Ethereum Network
          </h2>

          <div className="mt-[10px] flex flex-col gap-4">
            {Array.from({ length: 20 }).map((_, index) => (
              <TokenItem
                key={index}
                selected={selectedToken === "this token " + index}
                onClick={() => onTokenSelect("this token " + index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface TokenItemProps {
  selected?: boolean;
  onClick?: () => void;
}

function TokenItem({ onClick, selected }: TokenItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 rounded-lg bg-[#192134] px-6 py-[10px] ${selected && "border border-solid border-[#366CF0]"}`}
    >
      <Image
        src="/images/favicon.svg"
        alt="Network Logo"
        width={40}
        height={40}
        className="h-10 w-10"
      />

      <div className="flex flex-col gap-2">
        <label className="text-base font-semibold text-[#DCDCE4]">ETH</label>
        <p className="text-sm font-normal text-[#7A7E8C]">Ethereum</p>
      </div>
    </div>
  );
}

interface NetworkItemProps {
  selected?: boolean;
  onClick?: () => void;
}

function NetworkItem({ selected, onClick }: NetworkItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center rounded-[14px] bg-[#131A2A] p-[10px] ${selected && "border border-solid border-[#366CF0]"}`}
    >
      <Image
        src="/images/favicon.svg"
        alt="Network Logo"
        width={40}
        height={40}
        className="h-10 w-10"
      />
    </div>
  );
}

interface SelectTokenModalInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
}

function SelectTokenSearchInput({ ref, ...props }: SelectTokenModalInputProps) {
  return (
    <div className="w-full rounded-lg bg-[#192134] px-5 py-[18px] font-sans text-sm font-normal text-[#DCDCE4]">
      <div className="flex h-6 w-full items-center gap-3">
        <Search size={24} color="white" />
        <input
          {...props}
          ref={ref}
          type="text"
          className="h-full w-full border-none bg-transparent outline-none"
        />
      </div>
    </div>
  );
}
