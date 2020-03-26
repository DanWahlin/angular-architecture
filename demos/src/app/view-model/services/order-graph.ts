import { LineItem, Order, Product } from '../model';

/** An Order, its LineItems, and its ordered Products */
export interface OrderGraph {
  /** The root order of the Order Graph */
  order: Order;
  /** LineItems belonging to that order */
  lineItems: LineItem[];
  /** Hash by productId of the ordered products */
  products: ProductMap;
}

/** Map of Product Ids to Products */
export interface ProductMap { [key: number]: Product; }
