"use client";

import { FC, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NavBurger } from "./navburger";
import { MobileDrawer } from "./mobileDrawer";

interface NavScrollWrapperProps {
  children: Readonly<React.ReactNode>;
  mainBackgroundColor?: string;
}

export const NavScrollWrapper: FC<NavScrollWrapperProps> = ({
  children,
  mainBackgroundColor = "transparent",
}) => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const myref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    if (myref.current !== null && !open) {
      if (currentScrollY > 150) {
        myref.current.classList.add(
          // "bg-[#07070A]",
          "backdrop-blur-sm",
          "backdrop-filter",
          "shadow-lg",
          "drop-shadow-lg"
        );
      } else {
        myref.current.classList.remove(
          // "bg-[#07070A]",
          "backdrop-blur-sm",
          "backdrop-filter",
          "shadow-lg",
          "drop-shadow-lg"
        );
      }
    }

    if (currentScrollY > 150 && currentScrollY > scrollY) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const pathname = usePathname();

  return (
    <nav
      ref={myref}
      style={{
        transform: open
          ? "translateY(0)"
          : hidden
            ? "translateY(-100%)"
            : "translateY(0)",
        transition: "transform 0.35s ease-in-out",
        backgroundColor: open ? "black" : mainBackgroundColor,
      }}
      className={`fixed left-0 top-0 z-30 flex h-[60px] w-full items-center justify-center px-[5%] text-sm`}
    >
      <div className="flex w-full items-center justify-between lg:items-end">
        {children}
        <NavBurger open={open} setOpen={setOpen} />
      </div>
      <MobileDrawer open={open} setOpen={setOpen} pathname={pathname} />
    </nav>
  );
};
