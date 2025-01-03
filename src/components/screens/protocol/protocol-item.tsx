import Image from "next/image";

interface ProtocolItemProps {
  name: Readonly<string>;
  icon: Readonly<string | React.ReactNode>;
  onClick?: () => void;
  isSelected?: Readonly<boolean>;
}

export default function ProtocolItem({
  name,
  icon,
  onClick,
  isSelected,
}: ProtocolItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-2 rounded-lg bg-[#192134] px-4 py-3 text-[#DCDCE4] ${isSelected ? "border border-solid border-[#366CF0]" : "hover:border hover:border-solid hover:border-[#366CF0]"}`}
    >
      {typeof icon === "string" ? (
        <Image
          width={40}
          height={40}
          src={icon}
          alt={name}
          className="h-[40px] w-auto"
        />
      ) : (
        icon
      )}
      <span className="text-[22px] font-medium">{name}</span>
    </div>
  );
}
