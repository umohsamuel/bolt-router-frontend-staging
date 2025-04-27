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
  isGradient = true,
  loader,
  ...props
}: ButtonProps) {
  if (link) {
    return (
      <Link
        href={link}
        target={target}
        aria-disabled={isLoading || props["aria-disabled"]}
        className={cn(
          `flex w-fit items-center justify-center rounded-xl border-transparent ${isGradient ? "bg-[#366CF0] bg-gradient-to-r from-[#366CF0] via-[#356BF0] to-[#366CF0] shadow-[0px_20px_16px_-8px_rgba(4,163,227,0.38)]" : "bg-[#192134]"} px-4 py-3 text-base font-bold text-white before:absolute before:inset-0 before:-z-10 before:rounded-xl`,
          className
        )}
      >
        {isLoading ? (
          loader ? (
            loader
          ) : (
            <InlineCircularLoader color="white" />
          )
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
          `flex w-fit items-center justify-center rounded-xl border-transparent ${isGradient ? "bg-[#366CF0] bg-gradient-to-r from-[#366CF0] via-[#356BF0] to-[#366CF0] shadow-[0px_20px_16px_-8px_rgba(4,163,227,0.38)]" : "bg-[#192134]"} px-4 py-3 text-base font-bold text-white before:absolute before:inset-0 before:-z-10 before:rounded-xl ${isLoading ? "bg-[#192134]" : "bg-[#366CF0] bg-gradient-to-r from-[#366CF0] via-[#356BF0] to-[#366CF0]"} `,
          className
        )}
        {...props}
      >
        {isLoading ? (
          loader ? (
            loader
          ) : (
            <InlineCircularLoader color="white" />
          )
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
