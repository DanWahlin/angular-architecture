export interface Order {
  id: number;
  customerId: number;
  orderItems: OrderItem[];
}

export interface OrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
