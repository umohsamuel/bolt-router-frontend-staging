import { BaseInput } from "@/components/input";
import { ExplorerSwitcher } from "@/components/switcher";
import { TransactionDataTable } from "@/components/table";
import { Search } from "lucide-react";

const switches = ["All", "Bridge", "Swap"];

export default function Explorer() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-[26px] font-normal text-[#DCDCE4]">
        Bolt Router Analytics
      </h1>

      <ExplorerSwitcher switches={switches} />

      <div className="flex flex-wrap items-center gap-[68px]">
        {data.map((item) => (
          <AnalyticsItem
            key={item.title}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <BaseInput
          icon={<Search size={24} color="white" />}
          placeholder="Search address/TXID"
          className="w-full max-w-[450px]"
        />
        <button className="flex h-[50px] items-center justify-center rounded-lg bg-[#366CF0] px-6 font-semibold text-white">
          Search
        </button>
      </div>

      <div>
        <TransactionDataTable />
      </div>
    </div>
  );
}

interface AnalyticsItemProps {
  title: string;
  value: string;
}

function AnalyticsItem({ title, value }: AnalyticsItemProps) {
  return (
    <div className="flex flex-col gap-3 font-normal">
      <label className="text-base text-[#CDCDCD]">{title}</label>
      <p className="text-3xl text-[#DCDCE4]">{value}</p>
    </div>
  );
}

const data: AnalyticsItemProps[] = [
  { title: "Volume", value: "$55.15B" },
  { title: "Transactions", value: "13.79M" },
  { title: "Addresses", value: "2.51M" },
  { title: "Fees", value: "$32.33M" },
];
