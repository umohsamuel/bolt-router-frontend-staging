import { cn } from "@/utils";

interface HorizontalDividerProps {
  className?: string;
}

export default function HorizontalDivider({
  className,
}: HorizontalDividerProps) {
  return (
    <div
      className={cn(
        `h-[1px] w-full bg-gradient-to-r from-[#366CF0]/10 via-[#366CF0]/50 via-50% to-[#366CF0]/10`,
        className
      )}
    />
  );
}
