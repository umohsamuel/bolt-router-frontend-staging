import { SelectProtocol } from "@/components/screens/protocol";

export default function NonStableAssets() {
  return (
    <div className="w-full">
      <SelectProtocol
        protocols={protocols}
        postSelectInfo={
          <p className="text-base font-medium">
            All <span className="text-[#366CF0]">Protocols</span> are Available
          </p>
        }
      />
    </div>
  );
}

const protocols = [
  { name: "POLKADOT", icon: "/images/favicon.svg" },
  { name: "COSMOS", icon: "/images/favicon.svg" },
  { name: "AXELAR", icon: "/images/favicon.svg" },
  { name: "TERRA", icon: "/images/favicon.svg" },
];
