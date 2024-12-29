import { ButtonProps } from "@/types";
import { cn } from "@/utils";
import Link from "next/link";
import { InlineCircularLoader } from "../loaders";

export default function BaseButton({
  text,
  icon,
  link,
  target,
  className,
  isLoading,
  ...props
}: ButtonProps) {
  if (link) {
    return (
      <Link
        href={link}
        target={target}
        aria-disabled={isLoading}
        className={cn(
          `flex w-fit items-center justify-center rounded-xl border-transparent bg-[#366CF0] bg-gradient-to-r from-[#366CF0] via-[#356BF0] to-[#366CF0] px-4 py-3 text-base font-bold text-white shadow-[0px_20px_16px_-8px_rgba(4,163,227,0.38)] before:absolute before:inset-0 before:-z-10 before:rounded-xl`,
          className
        )}
      >
        {isLoading ? (
          <InlineCircularLoader color="white" />
        ) : (
          <>
            {text}
            {icon}
          </>
        )}
      </Link>
    );
  } else {
    return (
      <button
        disabled={isLoading}
        className={cn(
          `flex w-fit items-center justify-center rounded-xl border-transparent bg-[#366CF0] bg-gradient-to-r from-[#366CF0] via-[#356BF0] to-[#366CF0] px-4 py-3 text-base font-bold text-white shadow-[0px_20px_16px_-8px_rgba(4,163,227,0.38)] before:absolute before:inset-0 before:-z-10 before:rounded-xl`,
          className
        )}
        {...props}
      >
        {isLoading ? (
          <InlineCircularLoader color="white" />
        ) : (
          <>
            {text}
            {icon}
          </>
        )}
      </button>
    );
  }
}
