"use client";

import { useCallback, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { ClientOnly } from "../layouts";
import { InlineCircularLoader } from "../loaders";
import { TransactionDetails } from "@/types";
import { TransactionsDetailsModal } from "../modals";
import {
  tableCustomStyles,
  transactionTableColumn,
  transactionTableDummyData,
} from "@/lib";

createTheme(
  "boltRouterDark",
  {
    text: {
      primary: "#FFFFFF",
      secondary: "#DCDCE4",
    },
    background: {
      default: "#131A2A",
    },
    context: {
      background: "#131A2A",
      text: "#FFFFFF",
    },
    divider: {
      default: "#192134",
    },
    action: {
      button: "#192134",
      hover: "#FFFFFF",
      disabled: "gray",
    },
  },
  "dark"
);

export default function TransactionDataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [selectedRow, setSelectedRow] = useState<TransactionDetails | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handlePerRowsChange = useCallback((newPerPage: number) => {
    setPerPage(newPerPage);
    setCurrentPage(1);
  }, []);

  const handleRowClick = useCallback((row: TransactionDetails) => {
    setSelectedRow(row);
    setIsOpen(true);
  }, []);

  return (
    <ClientOnly placeHolder={<InlineCircularLoader />}>
      <div className="rounded-[10px] bg-[#131A2A] px-8 py-4 font-sans">
        <DataTable
          columns={transactionTableColumn}
          data={transactionTableDummyData}
          theme="boltRouterDark"
          fixedHeader
          fixedHeaderScrollHeight="500px"
          pagination
          paginationServer
          paginationTotalRows={transactionTableDummyData.length}
          paginationDefaultPage={currentPage}
          paginationPerPage={perPage}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
          customStyles={tableCustomStyles}
          highlightOnHover
          pointerOnHover
          responsive
          subHeaderWrap
          onRowClicked={handleRowClick}
        />

        <TransactionsDetailsModal
          rowData={selectedRow}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </ClientOnly>
  );
}
