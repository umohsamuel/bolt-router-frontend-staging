"use client";
import { cn } from "@/utils";
import { useState } from "react";

interface ExplorerSwitcherProps {
  switches: ReadonlyArray<string>;
  contents?: ReadonlyArray<React.ReactNode>;
}

export default function ExplorerSwitcher({
  switches,
  contents,
}: ExplorerSwitcherProps) {
  const [activeSwitch, setActiveSwitch] = useState(0);

  return (
    <div>
      <div>
        {switches.map((switchItem, index) => (
          <SwitchItem
            key={switchItem}
            value={switchItem}
            isActive={activeSwitch === index}
            className={`first:rounded-l-md`}
            onClick={() => setActiveSwitch(index)}
          />
        ))}
      </div>

      {contents && contents.length > 0 && contents[activeSwitch]}
    </div>
  );
}

interface SwitchItemProps {
  className?: Readonly<string>;
  isActive?: Readonly<boolean>;
  value: Readonly<string>;
  onClick?: () => void;
}

function SwitchItem({ isActive, className, value, onClick }: SwitchItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `${isActive ? "border-[#366CF0] bg-[#366CF0]/[0.33]" : "border-[#131A2A]/80 bg-[#131A2A]/50"} border border-solid px-4 py-3 text-sm font-normal text-white`,
        className
      )}
    >
      {value}
    </button>
  );
}
