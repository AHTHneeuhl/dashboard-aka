export type TStatus = "Confirmed" | "Delivered" | "Refunded" | "Pending";

export interface TOrder {
  id: number;
  title: string;
  logo: string;
  status: TStatus;
  quantity: number;
  price: number;
  placedOn: string;
}
