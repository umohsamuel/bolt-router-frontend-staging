"use client";
import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
  placeHolder?: React.ReactNode;
}

export default function ClientOnly({ children, placeHolder }: ClientOnlyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return placeHolder ? placeHolder : null;

  return <>{children}</>;
}
