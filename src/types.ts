export type TStatus =
  | "Confirmed"
  | "Delivered"
  | "Refunded"
  | "Pending"
  | "All";

export type TSort = "asc" | "desc";

export interface TOrder {
  id: number;
  title: string;
  logo: string;
  status: TStatus;
  subtitle: string;
  quantity: number;
  price: number;
  placedOn: string;
}
