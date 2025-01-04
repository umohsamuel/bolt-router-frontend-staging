import { ModalProps, TransactionDetails } from "@/types";
import BaseModal from "./base-modal";
import { transactionDetailsArr } from "@/lib";

interface TransactionDataTableModalProps extends ModalProps {
  rowData: TransactionDetails | null;
}

export default function TransactionsDetailsModal({
  rowData,
  isOpen,
  setIsOpen,
}: TransactionDataTableModalProps) {
  return (
    <BaseModal title="Transaction Detail" isOpen={isOpen} setIsOpen={setIsOpen}>
      {rowData && (
        <div className="mr-2 divide-y-[1px] divide-[#252537] rounded-xl border border-solid border-[#252537]">
          <ContentWrapper>
            {transactionDetailsArr.slice(0, 2).map((tranDets) => (
              <ContentItem
                key={tranDets.title}
                title={tranDets.title}
                value={tranDets.value}
              />
            ))}
          </ContentWrapper>
          <ContentWrapper>
            {transactionDetailsArr.slice(2, 4).map((tranDets) => (
              <ContentItem
                key={tranDets.title}
                title={tranDets.title}
                value={tranDets.value}
              />
            ))}
          </ContentWrapper>
          <ContentWrapper>
            {transactionDetailsArr.slice(4, 6).map((tranDets) => (
              <ContentItem
                key={tranDets.title}
                title={tranDets.title}
                value={tranDets.value}
              />
            ))}
          </ContentWrapper>
          <ContentWrapper>
            {transactionDetailsArr.slice(6).map((tranDets) => (
              <ContentItem
                key={tranDets.title}
                title={tranDets.title}
                value={tranDets.value}
              />
            ))}
          </ContentWrapper>
        </div>
      )}
    </BaseModal>
  );
}

interface ContentWrapperProps {
  children: React.ReactNode;
}

function ContentWrapper({ children }: ContentWrapperProps) {
  return <div className="flex flex-col gap-2 px-4 py-6">{children}</div>;
}

interface ContentItemProps {
  title: string;
  value: string;
}

function ContentItem({ title, value }: ContentItemProps) {
  return (
    <div className="flex items-center justify-between font-normal">
      <label className="flex w-[25%] shrink-0 text-base text-[#A1A3AA]">
        {title}
      </label>
      <p className="w-full max-w-[75%] text-wrap break-words text-sm text-[#EEEFFB]">
        {value}
      </p>
    </div>
  );
}
