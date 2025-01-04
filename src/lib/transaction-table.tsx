import { TransactionDetails } from "@/types";
import { TableColumn, TableStyles } from "react-data-table-component";

export const transactionTableColumn: TableColumn<TransactionDetails>[] = [
  {
    name: "#",
    selector: (row) => row.id.toString(),
    sortable: true,
  },
  {
    name: "Sent",
    cell: (row) => (
      <div>
        <div>{row.sent}</div>
        <div className="text-sm text-gray-500">{row.sentNetwork}</div>
      </div>
    ),
  },
  {
    name: "Received",
    cell: (row) => (
      <div>
        <div>{row.received}</div>
        <div className="text-sm text-gray-500">{row.receivedNetwork}</div>
      </div>
    ),
  },
  {
    name: "Address",
    selector: (row) => row.address,
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "Status",
    cell: (row) => (
      <span
        className={row.status === "Success" ? "text-green-500" : "text-red-500"}
      >
        {row.status}
      </span>
    ),
  },
];

export const tableCustomStyles: TableStyles = {
  table: {
    style: {
      borderRadius: "0px",
    },
  },
  rows: {
    style: {
      minHeight: "60px",
    },
  },
  headCells: {
    style: {
      fontSize: "14px",
      fontWeight: 500,
      textTransform: "uppercase" as const,
      color: "#FFFFFF",
    },
  },
  cells: {
    style: {
      paddingTop: "18px",
      paddingBottom: "18px",
      fontSize: "14px",
      color: "#DCDCE4",
      fontWeight: 500,
    },
  },
};
