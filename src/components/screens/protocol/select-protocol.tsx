"use client";

import Link from "next/link";
import ProtocolItem from "./protocol-item";
import { redirect } from "next/navigation";
import { useProtocolStore } from "@/zustand/providers";
import { routes } from "@/lib/routes";

interface SelectProtocolProps {
  postSelectInfo?: Readonly<React.ReactNode>;
  protocols: ReadonlyArray<{
    name: string;
    icon: string | React.ReactNode;
  }>;
}

export default function SelectProtocol({
  postSelectInfo,
  protocols,
}: SelectProtocolProps) {
  const selectedProtocol = useProtocolStore((state) => state.selectedProtocol);
  const setSelectedProtocol = useProtocolStore(
    (state) => state.setSelectedProtocol
  );

  return (
    <div className="w-full space-y-[30px] text-[#CDCDCD]">
      <div className="space-y-[30px] rounded-xl bg-[#131A2A] px-10 py-[30px] text-[#DCDCE4]">
        <label className="text-base font-semibold">Select Protocol</label>
        <div className="flex max-h-[20%] flex-col gap-5 overflow-y-auto">
          {protocols.map((protocol) => (
            <ProtocolItem
              key={protocol.name}
              icon={protocol.icon}
              name={protocol.name}
              onClick={async () => {
                setSelectedProtocol(protocol);

                redirect(routes.crossSwap.stable);
              }}
              isSelected={selectedProtocol.name === protocol.name}
            />
          ))}
        </div>
        <p className="text-sm font-normal">
          New to Bolt Router?{"  "}
          <Link
            href={"#"}
            className="font-medium text-[#0B6FFB] underline underline-offset-1"
          >
            Learn more
          </Link>
        </p>
      </div>

      {postSelectInfo}
    </div>
  );
}
