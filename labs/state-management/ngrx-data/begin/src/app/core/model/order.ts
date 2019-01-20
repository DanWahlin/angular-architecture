export class Order {
  id: number;
  customerId: number;
  orderItems: OrderItem[];
}

export class OrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
