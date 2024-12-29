import { SelectProtocol } from "@/components/screens/protocol";
import Link from "next/link";

export default function StableAssets() {
  return (
    <div className="w-full">
      <SelectProtocol
        protocols={protocols}
        postSelectInfo={
          <p className="text-base font-medium">
            Only{" "}
            <Link
              href={"#"}
              className="text-[#0B6FFB] underline underline-offset-1"
            >
              AXELAR
            </Link>{" "}
            is available in stable Asset
          </p>
        }
      />
    </div>
  );
}

const protocols = [
  { name: "AXELAR", icon: "/images/favicon.svg" },
  { name: "COSMOS", icon: "/images/favicon.svg" },
  { name: "POLKADOT", icon: "/images/favicon.svg" },
  { name: "TERRA", icon: "/images/favicon.svg" },
];
