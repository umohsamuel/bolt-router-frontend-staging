import BaseModal from "./base-modal";
import { ModalProps } from "@/types";
import { ArrowRight } from "lucide-react";
import { TokenIcon } from "@web3icons/react";

// interface TransactionSummaryModalProps extends ModalProps {}

export default function TransactionSummaryModal({
  isOpen,
  setIsOpen,
  onClose,
}: ModalProps) {
  return (
    <BaseModal
      onClose={onClose}
      title="Transaction Summary"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <TransactionSummaryItem
        date="2022-01-01"
        status="completed"
        from={{ network: "Binance Smart Chain", amount: 0.5, symbol: "BNB" }}
        to={{ network: "Ethereum", amount: 0.5, symbol: "ETH" }}
      />
    </BaseModal>
  );
}

interface TransactionSummaryItemProps {
  date: Readonly<string>;
  status: Readonly<"completed" | "pending" | "failed">;
  from: Readonly<{
    network: Readonly<string>;
    amount: Readonly<number>;
    symbol: Readonly<string>;
  }>;
  to: Readonly<{
    network: Readonly<string>;
    amount: Readonly<number>;
    symbol: Readonly<string>;
  }>;
}

function TransactionSummaryItem({
  date,
  status,
  from,
  to,
}: TransactionSummaryItemProps) {
  return (
    <div className="w-full rounded-[10px] border-[1.5px] border-solid border-[#192134]">
      <div className="flex w-full items-center justify-between rounded-t-[10px] bg-[#192134] px-[5%] py-3 text-xs font-medium capitalize lg:px-7">
        <span className="text-[#DCDCE4]">{date}</span>
        <span
          className={` ${
            status === "completed"
              ? "text-[#14AE5C]"
              : status === "pending"
                ? "text-yellow-500"
                : "text-[#E03232]"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="flex items-center justify-between px-[5%] py-7 lg:px-5">
        <div>
          <TokenItem
            symbol={from.symbol}
            network={from.network}
            amount={from.amount}
            action="from"
          />
        </div>
        <ArrowRight size={16} color="white" />
        <div>
          <TokenItem
            symbol={to.symbol}
            network={to.network}
            amount={to.amount}
            action="to"
          />
        </div>
      </div>
    </div>
  );
}

const TokenItem = ({
  symbol,
  network,
  amount,
  action,
}: {
  symbol: string;
  amount: number;
  network: string;
  action: "from" | "to";
}) => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <TokenIcon symbol={symbol.toLowerCase()} variant="branded" size={36} />

      <div className="flex flex-col gap-2">
        <p
          style={{
            color: action === "from" ? "#E03232" : "#14AE5C",
          }}
          className="flex items-center gap-1 text-sm font-semibold"
        >
          {action === "from" ? `-${amount}` : `+${amount}`} {symbol}
        </p>
        <p className="text-[10px] font-normal capitalize text-[#DCDCE4]">
          {network}
        </p>
      </div>
    </div>
  );
};
