import { Injectable } from '@angular/core';

import { BehaviorSubject, distinctUntilChanged, map, shareReplay } from 'rxjs';

import {
  addEntity, collectionSnapshot, updateEntity,
  Customer, EntityCache, LineItem, Order, Product
} from '../model';

import { getNewCache } from './data';

/** Simulate getting and saving model data in a reactive (RxJS) and immutable way.
 * Kind of sort of like a data service facade you might write with Ngrx Data.
 */
@Injectable({ providedIn: 'root'})
export class CustomerOrdersDataService {

  private nextId: number;

  private cacheStore = new BehaviorSubject<EntityCache>(null);
  cache$ = this.cacheStore.asObservable();

  // Observable collection selectors. They emit every time the collection changes.
  customers$ = this.cache$.pipe(map(c => c.customers), distinctUntilChanged(), shareReplay(1));
  lineItems$ = this.cache$.pipe(map(l => l.lineItems), distinctUntilChanged(), shareReplay(1));
  orders$ = this.cache$.pipe(map(o => o.orders),       distinctUntilChanged(), shareReplay(1));
  products$ = this.cache$.pipe(map(p => p.products),   distinctUntilChanged(), shareReplay(1));

  // Collection snapshots of the latest state of the collection. For those who don't like Observables :-)
  get customers() { return collectionSnapshot<Customer>('customers', this.cache$); }
  get lineItems() { return collectionSnapshot<LineItem>('lineItems', this.cache$); }
  get orders() { return collectionSnapshot<Order>('orders', this.cache$); }
  get products() { return collectionSnapshot<Product>('products', this.cache$); }

  /** Reinitialize cache with clones of the source raw data  */
  reset() {
    this.cacheStore.next(getNewCache());
    this.nextId = 100; // big enough;
    console.log('ViewModel Demo Cache Reset');
  }

  // #region save methods
  saveCustomer(customer: Partial<Customer>): Customer {
    return customer.id == null
      ? this.addCustomer(customer)
      : this.updateCustomer(customer);
  }

  private addCustomer(customer: Partial<Customer> = {}): Customer  {
    const id = this.nextId++;
    const newCustomer = Customer.create(id, customer);
    return addEntity<Customer>(newCustomer, 'customers', this.cacheStore);
  }

  private updateCustomer(customer: Partial<Customer>): Customer {
    return updateEntity<Customer>(customer as Customer, 'customers', this.cacheStore);
  }

  // #endregion save methods
}
