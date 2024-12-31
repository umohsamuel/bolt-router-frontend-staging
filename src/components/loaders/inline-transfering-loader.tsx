import { cn } from "@/utils";
import Image from "next/image";

interface TransferingLoaderProps {
  size?: Readonly<number>;
  color?: Readonly<string>;
  className?: Readonly<string>;
  text?: Readonly<string>;
}

export default function SwapStatusInlineLoader({
  size = 20,
  className,
  text = "Transferring",
}: TransferingLoaderProps) {
  return (
    <span className="flex w-full items-center justify-center gap-2">
      {text && (
        <span className={cn(`text-sm font-normal text-[#366CF0]`, className)}>
          {text}
        </span>
      )}
      <Image
        src="/vectors/circular-dots-loader.svg"
        alt="loader"
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
        }}
        className={`animate-spin`}
      />
    </span>
  );
}
