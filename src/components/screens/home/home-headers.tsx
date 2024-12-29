import { cn } from "@/utils";

interface PageMainHeaderProps {
  content: Readonly<string>;
  className?: Readonly<string>;
}

export function PageMainHeader({ content, className }: PageMainHeaderProps) {
  return (
    <h1
      className={cn(
        `text-center text-3xl font-semibold text-[#DCDCE4] lg:text-5xl 2xl:text-6xl`,
        className
      )}
    >
      {content}
    </h1>
  );
}

export function PageMainSubHeader({ content, className }: PageMainHeaderProps) {
  return (
    <h3
      className={cn(
        `text-center text-xs font-medium uppercase text-[#366CF0] lg:text-sm`,
        className
      )}
    >
      {content}
    </h3>
  );
}
