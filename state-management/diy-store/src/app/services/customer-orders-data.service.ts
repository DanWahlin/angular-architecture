/*
* Data services for the entire app, relying on entity store infrastructure.
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { concatMap, forkJoin, map, Observable } from 'rxjs';

import { addEntity, cache$, initializeCache, initialCacheState, loadCollection, updateEntity } from '../store';
import { Customer, Order } from '../model';


/** Simulate getting and saving model data in a reactive (RxJS) and immutable way.
 * Kind of sort of like a data service facade you might write with Ngrx Data.
 */
@Injectable({ providedIn: 'root' })
export class CustomerOrdersDataService {

  constructor(private http: HttpClient) {
    this.clearCache();
  }

  // #region Observable collection selectors

  /** Observable of customers in cache */
  customers$ = cache$.pipe(map(c => c.customers));

  /** Observable of orders in cache */
  orders$ = cache$.pipe(map(o => o.orders));

  // #endregion Observable collection selectors

  // #region cache methods
  clearCache() {
    initializeCache(initialCacheState);
  }

  /** Load all customers into cache */
  loadCustomers() {
    return this.http.get<Customer[]>('api/customers').pipe(
      map(customers => loadCollection<Customer>('customers', customers)),
    );
  }

  /** Load all orders into cache */
  loadOrders() {
    return this.http.get<Order[]>('api/orders').pipe(
      map(orders => loadCollection<Order>('orders', orders))
    );
  }

  /** Reload the cache with all customer and order data; emits `true` when done.
   * REMEMBER TO SUBSCRIBE. */
  loadAll() {
    return forkJoin([
      this.loadCustomers(),
      this.loadOrders()
    ]).pipe(
      map(() => true)
    );
  }

  /** Reset the mock database and reload the data */
  reset() {
    this.http.post('commands/resetdb', {}).pipe(
      concatMap(() => this.loadAll())
    ).subscribe();
  }
  // #endregion cache methods

  // #region save methods

  /** Save new or updated customer.
   * Returns observable emitting true if succeeds.
   * REMEMBER TO SUBSCRIBE. */
  saveCustomer(customer: Partial<Customer>): Observable<boolean> {
    return customer.id == null
      ? this.addCustomer(customer)
      : this.updateCustomer(customer);
  }

  private nextId = 100; // TODO: replace with server-generated id;

  private addCustomer(customer: Partial<Customer> = {}): Observable<boolean> {
    const id = this.nextId++;
    const newCustomer = Customer.create(id, customer);
    customer = addEntity<Customer>('customers', newCustomer);
    return this.http.post('api/customers', customer).pipe(map(() => true));
  }

  private updateCustomer(customer: Partial<Customer>): Observable<boolean> {
    customer = updateEntity<Customer>('customers', customer as Customer);
    return this.http.post('api/customers', customer).pipe(map(() => true));
  }

  // #endregion save methods
}
