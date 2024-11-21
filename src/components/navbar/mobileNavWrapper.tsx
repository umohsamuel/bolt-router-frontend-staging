"use client";
import { FC, PropsWithChildren, useEffect, useRef } from "react";

interface MobileDrawerWrapperProps {
  open: boolean;
}

export const MobileDrawerWrapper: FC<
  MobileDrawerWrapperProps & PropsWithChildren
> = ({ open, children }) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (drawerRef.current) {
      if (open) {
        // Set the drawer height to trigger transition
        drawerRef.current.style.height = `${window.innerHeight - 60}px`; // Adjust for fixed height
      } else {
        // Collapse the drawer
        drawerRef.current.style.height = "0";
      }
    }
  }, [open]);

  return (
    <div
      ref={drawerRef}
      style={{
        overflow: "hidden",
        transition: "height 0.3s ease-in-out",
        height: open ? `${window.innerHeight - 60}px` : "0",
      }}
      className={`fixed left-0 top-[60px] flex w-full justify-center uppercase lg:hidden`}
    >
      {children}
    </div>
  );
};
