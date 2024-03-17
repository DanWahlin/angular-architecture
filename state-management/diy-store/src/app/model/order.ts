export class Order {
  id: number;
  customerId: number;
  orderItems: OrderItem[]; // NESTED! Generally not a good idea.
}

export class OrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
