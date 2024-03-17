/*
 * Metadata for the objects and collection in the store.
 */
import { Customer, Order } from '../model';

/** Type of the objects in a cached collection. */
export type CollectionType = Customer | Order;

/** A cache of objects, organized in collections of the same type. */
export interface StoreCache {
  customers: Customer[];
  orders: Order[];
}

/** State of the cache when initialized or cleared. */
export const initialCacheState: StoreCache = {
  customers: [],
  orders: [],
}

