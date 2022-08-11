import { calcFullName } from '../../shared/fullname.pipe';
import { OrderGraph } from '../services';

/**  Order ViewModel: the "graph" of Order/LineItems/Products */
export interface OrderVm {
  // Only include properties that the views need
  orderId: number;
  customerName: string;
  memo: string;
  orderDate: Date;
  lineItems: LineItemVm[];
}

/** ViewModel of an individual order line-item */
export interface LineItemVm {
  id: number;
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

/** Creates an Order ViewModel from customer and order graph */
export function createOrderVm(customer: { first: string; last: string }, orderGraph: OrderGraph): OrderVm {
  const { order, lineItems, products } = orderGraph;

  // Join line items and their products into LineItem ViewModels
  const lineItemVms = lineItems.map(item => {
    const { productName, price } = products[item.productId];
    const lineItemVm: LineItemVm = {
      id: item.id,
      productId: item.productId,
      productName,
      price,
      quantity: item.quantity
    };

    return lineItemVm;
  });

  // Merge data from customer, order, and line-item view models
  const orderVm: OrderVm = {
    orderId: order.id,
    customerName: calcFullName(customer),
    memo: order.memo,
    orderDate: order.orderDate,
    lineItems: lineItemVms
  };

  return orderVm;
}
