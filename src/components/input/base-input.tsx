"use client";

import { Ref, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/utils";

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;
  icon?: React.ReactNode;
  className?: string;
}

export default function BaseInput({
  icon,
  type = "text",
  ref,
  className,
  ...props
}: BaseInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  if (type === "password") {
    return (
      <BaseInputWrapper icon={icon} className={className}>
        <input
          {...props}
          type={showPassword ? "text" : "password"}
          ref={ref}
          className="h-full w-full border-none bg-transparent outline-none"
        />
        {showPassword ? (
          <EyeOff
            className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <Eye
            className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(true)}
          />
        )}
      </BaseInputWrapper>
    );
  }

  if (type === "file") {
    return (
      <BaseInputWrapper icon={icon} className={className}>
        <input
          type="file"
          ref={ref}
          className="h-full w-full border-none bg-transparent text-white outline-none file:mr-4 file:rounded file:border-0 file:bg-[#1e293b] file:px-3 file:py-1 file:text-sm file:font-medium"
          {...props}
        />
      </BaseInputWrapper>
    );
  }

  return (
    <BaseInputWrapper icon={icon} className={className}>
      <input
        {...props}
        type={type}
        ref={ref}
        className="h-full w-full border-none bg-transparent font-sans outline-none"
      />
    </BaseInputWrapper>
  );
}

interface BaseInputWrapperProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

function BaseInputWrapper({
  icon,
  className,
  children,
}: BaseInputWrapperProps) {
  return (
    <div
      className={cn(
        `relative flex items-center gap-[10px] rounded-lg bg-[#192134] px-4 py-[14px] text-sm font-normal text-white`,
        className
      )}
    >
      {icon && icon}

      {children}
    </div>
  );
}
