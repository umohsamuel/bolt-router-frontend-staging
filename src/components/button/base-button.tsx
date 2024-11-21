import { ButtonProps } from "@/types";
import { cn } from "@/utils";
import Link from "next/link";

export default function BaseButton({
  text,
  icon,
  link,
  target,
  className,
  ...props
}: ButtonProps) {
  if (link) {
    return (
      <Link
        href={link}
        target={target}
        className={cn(
          `flex items-center justify-center rounded-xl bg-[#366CF0] px-4 py-3 text-base font-bold text-white`,
          className
        )}
      >
        {text}
        {icon}
      </Link>
    );
  } else {
    return (
      <button
        className={cn(
          `flex items-center justify-center rounded-xl bg-[#366CF0] px-4 py-3 text-base font-bold text-white`,
          className
        )}
        {...props}
      >
        {text}
        {icon}
      </button>
    );
  }
}
