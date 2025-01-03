import { ModalProps } from "@/types";
import BaseModal from "./base-modal";

// interface RecentTransactionsModalProps extends ModalProps {}

export default function RecentTransactionsModal({
  isOpen,
  setIsOpen,
}: ModalProps) {
  return (
    <BaseModal
      title="Transaction History"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div>hellow world</div>
    </BaseModal>
  );
}
