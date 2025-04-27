import { ModalProps } from "@/types";
import BaseModal from "./base-modal";
import { useDisconnect } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { copyToClipboard, formatWalletAddress } from "@/utils";
import { LucideIcon, SquareArrowOutUpRight, Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { routes } from "@/lib/routes";
import { useProtocolStore } from "@/zustand/providers";
import { initProtocol } from "@/lib/protocol";

export default function AddressDetailsModal({ isOpen, setIsOpen }: ModalProps) {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const router = useRouter();
  const setSelectedProtocol = useProtocolStore(
    (state) => state.setSelectedProtocol
  );

  const bscScanUrl = `https://bscscan.com/address/${address}`;

  return (
    <BaseModal title="Address" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-10 rounded-[10px] border border-solid border-[#192134] px-[30px] py-[26px]">
        <div className="flex flex-col gap-[18px]">
          {address && (
            <h1 className="text-lg font-semibold">
              {formatWalletAddress(address as string)}
            </h1>
          )}

          <div className="flex items-center gap-6">
            {address &&
              AddressActionItems.map((item, index) => (
                <AddressActionItem
                  key={item.text}
                  text={item.text}
                  icon={item.icon}
                  onClick={
                    index === 0
                      ? async () =>
                          await copyToClipboard(address).then((res) => {
                            if (res) {
                              toast.success("Address copied to clipboard");
                            } else {
                              toast.error(
                                "Failed to copy address to clipboard"
                              );
                            }
                          })
                      : () => window.open(bscScanUrl, "_blank")
                  }
                />
              ))}
          </div>
        </div>

        <button
          onClick={async () => {
            await disconnect();
            setSelectedProtocol(initProtocol);
            setIsOpen(false);
            router.push(routes.home);
          }}
          className="rounded-md border border-solid border-[#E03232] py-2 text-sm font-normal text-[#E03232]"
        >
          Logout
        </button>
      </div>
    </BaseModal>
  );
}

interface AddressActionItemProps {
  text: string;
  icon: LucideIcon;
  onClick?: () => void;
}

function AddressActionItem({
  text,
  icon: Icon,
  onClick,
}: AddressActionItemProps) {
  return (
    <div
      className="flex cursor-pointer items-center gap-2 text-sm font-normal capitalize text-[#366CF0]"
      onClick={onClick}
    >
      <Icon size={19} color="#366CF0" />
      {text}
    </div>
  );
}

const AddressActionItems = [
  {
    text: "Copy Address",
    icon: Copy,
  },
  {
    text: "View on BscScan",
    icon: SquareArrowOutUpRight,
  },
];
