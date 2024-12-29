"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface PageReRouterProps {
  children?: Readonly<React.ReactNode>;
  redirectPath: Readonly<string>;
}

export default function PageReRouter({
  redirectPath,
  children,
}: PageReRouterProps) {
  const currentPath = usePathname();
  const router = useRouter();

  console.log(currentPath, redirectPath);

  useEffect(() => {
    if (currentPath !== redirectPath) {
      router.replace(redirectPath);
    }
  }, [currentPath, redirectPath]);

  return <>{children}</>;
}
