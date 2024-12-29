"use client";

import { BaseModal } from "@/components/modals";
import { useState } from "react";

export default function RecentTransactions() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <button onClick={openModal} className="text-sm font-bold text-[#366CF0]">
        <span className="font-normal text-[#CDCDCD]">(0)</span> Recent
        Transactions
      </button>

      <BaseModal
        title="Transaction History"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div>hellow world</div>
      </BaseModal>
    </div>
  );
}
