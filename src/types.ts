export type TStatus = "Confirmed" | "Delivered" | "Refunded" | "Pending";

export type TSort = "asc" | "desc";

export interface TOrder {
  id: number;
  title: string;
  logo: string;
  subtitle: string;
  quantity: number;
  price: number;
  placedOn: string;
}
