"use client";

import { RecentTransactionsModal } from "@/components/modals";
import { useState } from "react";

export default function RecentTransactions() {
  const [openRecentTransactionsModal, setOpenRecentTransactionsModal] =
    useState(false);

  function openModal() {
    setOpenRecentTransactionsModal(true);
  }

  return (
    <div>
      <button onClick={openModal} className="text-sm font-bold text-[#366CF0]">
        <span className="font-normal text-[#CDCDCD]">(0)</span> Recent
        Transactions
      </button>

      <RecentTransactionsModal
        isOpen={openRecentTransactionsModal}
        setIsOpen={setOpenRecentTransactionsModal}
      />
    </div>
  );
}
