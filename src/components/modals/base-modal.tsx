"use client";

import ReactDOM from "react-dom";
import { X } from "lucide-react";
import { ModalProps } from "@/types";
import { useEffect, useRef } from "react";

interface BaseModalProps extends ModalProps {
  children: Readonly<React.ReactNode>;
  title?: Readonly<string>;
}

export default function BaseModal({
  title,
  isOpen,
  setIsOpen,
  children,
}: BaseModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  function handleClickOutside(e: React.MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }

  function close() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black/50 px-[5%] backdrop-blur-sm"
    >
      <div
        ref={modalRef}
        className="flex max-h-[90%] w-full max-w-[656px] flex-col gap-5 rounded-xl bg-[#131A2A] px-10 py-[30px]"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-base font-semibold text-[#DCDCE4]">{title}</h1>
          <X size={24} color="white" onClick={close} />
        </div>

        <div className="max-h-full overflow-y-auto">{children}</div>
      </div>
    </div>,
    document.body
  );
}
