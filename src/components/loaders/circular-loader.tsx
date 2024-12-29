import { cn } from "@/utils";
import { LoaderCircle } from "lucide-react";

interface PageCircularLoaderProps {
  size?: Readonly<number>;
  color?: Readonly<string>;
  className?: Readonly<string>;
}

export default function PageCircularLoader({
  size = 32,
  color = "#366CF0",
  className,
}: PageCircularLoaderProps) {
  return (
    <div className="my-4 flex w-full items-center justify-center">
      <LoaderCircle
        size={size}
        color={color}
        className={cn(`animate-spin`, className)}
      />
    </div>
  );
}

export function InlineCircularLoader({
  size = 24,
  color = "#366CF0",
  className,
}: PageCircularLoaderProps) {
  return (
    <div className="flex w-full items-center justify-center">
      <LoaderCircle
        size={size}
        color={color}
        className={cn(`animate-spin`, className)}
      />
    </div>
  );
}
