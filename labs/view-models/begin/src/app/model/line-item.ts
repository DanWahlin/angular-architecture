import { Order  } from './order';
import { Product } from './product';

 export class LineItem {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;

  /** True if "soft deleted" */
  isDeleted?: boolean;

  static create(id: number, lineItem: Partial<LineItem> = {}, order?: Order, product?: Product) {
    const newLineItem = Object.assign(new LineItem(), {
      orderId: order ? order.id : 0,
      productId: product ? product.id : 0,
      quantity: 1,
      isDeleted: false,
      ...lineItem,
    });
    return newLineItem;
  }
}
