import { Customer } from './customer';

export class Order {
  id: number;
  customerId: number;
  memo: string;
  orderDate: Date;

  static create(id: number, order: Partial<Order> = {}, customer?: Partial<Customer>) {
    // Defaults
    const newOrder: Order =  Object.assign(new Order(), {
      // Defaults
      customerId: customer ? customer.id : 0,
      orderDate: new Date(),
      ...order,
      id
    });
    return newOrder;
  }
}
