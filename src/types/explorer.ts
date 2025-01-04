export type TransactionDetails = {
  id: number;
  sent: string;
  sentNetwork: string;
  received: string;
  receivedNetwork: string;
  address: string;
  date: string;
  status: "Success" | "Failed";
};