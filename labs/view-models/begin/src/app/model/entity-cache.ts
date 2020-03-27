import { Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators';

import { Customer } from './customer';
import { LineItem } from './line-item';
import { Order } from './order';
import { Product } from './product';

export type EntityType = Customer | LineItem | Order | Product;

/** 
 * A cache of collections for each "entity type" in your model
 */
export interface EntityCache {
  [key: string]: EntityType[];
  customers: Customer[];
  orders: Order[];
  lineItems: LineItem[];
  products: Product[];
}

/** Observable store of the EntityCache. Actually an RxJS subject. An impoverished ngrx store. */
export type CacheStore = Subject<EntityCache>;

/** Get the current value (a "snapshot") of the entire Entity Cache */
export function cacheSnapShot(cache$: Observable<EntityCache>) {
  let cache: EntityCache;
  cache$.pipe(first()).subscribe(c => cache = c);
  return cache;
}

/** Get the current value (a "snapshot") of a named collection in cache */
export function collectionSnapshot<T extends EntityType>(collectionName: keyof EntityCache, cache$: Observable<EntityCache>) {
  return cacheSnapShot(cache$)[collectionName] as T[];
}
