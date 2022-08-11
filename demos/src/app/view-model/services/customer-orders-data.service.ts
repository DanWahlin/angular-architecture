import { Injectable } from '@angular/core';

import { of, ReplaySubject, Observable } from 'rxjs';
import { concatMap, first, map } from 'rxjs/operators';

import { addEntity, collectionSnapshot, updateEntity, Customer, EntityCache, LineItem, Order, Product } from '../model';

import { getNewCache } from './data';
import { OrderGraph, ProductMap } from './order-graph';

/**
 * Simulate getting and saving model data in a reactive (RxJS) and immutable way.
 * Kind of sort of like a data service facade you might write with Ngrx Data.
 */
@Injectable({ providedIn: 'root' })
export class CustomerOrdersDataService {
  private nextId = 0;

  private cacheStore = new ReplaySubject<EntityCache>(1);
  cache$ = this.cacheStore.asObservable();

  // Observable collection selectors. They emit every time the collection changes.
  customers$ = this.cache$.pipe(map(c => c.customers));
  lineItems$ = this.cache$.pipe(map(l => l.lineItems));
  orders$ = this.cache$.pipe(map(o => o.orders));
  products$ = this.cache$.pipe(map(p => p.products));

  // Collection snapshots of the latest state of the collection. For those who don't like Observables :-)
  get customers() {
    return collectionSnapshot<Customer>('customers', this.cache$);
  }
  get lineItems() {
    return collectionSnapshot<LineItem>('lineItems', this.cache$);
  }
  get orders() {
    return collectionSnapshot<Order>('orders', this.cache$);
  }
  get products() {
    return collectionSnapshot<Product>('products', this.cache$);
  }

  /** Reinitialize cache with clones of the source raw data  */
  reset() {
    this.cacheStore.next(getNewCache());
    this.nextId = 100; // big enough;
    console.log('ViewModel Demo Cache Reset');
  }

  // #region get methods
  /**
   * Terminating Observable of the Customer with this id. Undefined if not found.
   * Must subscribe but no need to unsubscribe.
   */
  getCustomerById(customerId: number): Observable<Customer | undefined> {
    // get from cache but pretend to get it from the server
    return this.customers$.pipe(
      first(),
      map(customers => customers.find(o => o.id === customerId))
    );
  }

  /**
   * Terminating Observable of an order, that order's lineItems, and the lineItems' products as a hash map.
   * Must subscribe but no need to unsubscribe.
   */
  getOrderGraphByOrderId(orderId: number): Observable<OrderGraph> {
    return this.orders$.pipe(
      first(),
      // Get the order for this orderId
      map(orders => orders.find(o => o.id === orderId)),
      concatMap(order => this.getOrderGraphForOrder(order!))
    );
  }

  /**
   * Terminating Observable of an order, that order's lineItems, and the lineItems' products as a hash map.
   * Must subscribe but no need to unsubscribe.
   */
  getOrderGraphForOrder(order: Order): Observable<OrderGraph> {
    if (order == null) {
      return of({ order, lineItems: [] as LineItem[], products: {} as ProductMap });
    }

    // Terminating observable of the order's lineItems
    const lineItems$ = this.lineItems$.pipe(
      first(),
      map(items => items.filter(item => item.orderId === order.id))
    );

    return lineItems$.pipe(
      concatMap(lineItems =>
        this.getLineItemProducts(lineItems).pipe(map(products => ({ order, lineItems, products })))
      )
    );
  }

  /**
   * Terminating Observable emitting a product map of products associated with the given Order line items.
   * Must subscribe but no need to unsubscribe.
   */
  private getLineItemProducts = (lineItems: LineItem[]) => {
    // product ids referenced by line items
    const productIds = lineItems && lineItems.length > 0 ? lineItems.map(item => item.productId) : [];

    return this.getProductMap(productIds);
  };

  /**
   * Terminating Observable emitting a product map of products with the given product ids
   * Must subscribe but no need to unsubscribe.
   */
  private getProductMap(productIds: number[]): Observable<ProductMap> {
    if (productIds && productIds.length > 0) {
      return this.products$.pipe(
        first(),
        // the ordered products referenced in the line items
        map(products => products.filter(p => productIds.includes(p.id))),

        // convert ordered products array into a product hash map
        map(orderedProducts =>
          orderedProducts.reduce((acc, product) => {
            acc[product.id] = product;
            return acc;
          }, {} as ProductMap)
        )
      );
    } else {
      return of({} as ProductMap);
    }
  }

  /**
   * Observable of Orders belonging to a Customer.
   * @returns a non-terminating observable of Orders. Must unsubscribe!
   */
  watchCustomerOrders(customerOrId: Customer | number): Observable<Order[]> {
    const customerId = typeof customerOrId === 'number' ? customerOrId : customerOrId.id;
    // get from cache but pretend to get from the server
    return this.orders$.pipe(map(orders => orders.filter(o => o.customerId === customerId)));
  }

  // #endregion get methods

  // #region save methods
  addCustomer(customer: Partial<Customer> = {}): Customer {
    const id = this.nextId++;
    const newCustomer = Customer.create(id, customer);
    return addEntity<Customer>(newCustomer, 'customers', this.cacheStore);
  }

  addLineItem(lineItem: Partial<LineItem> = {}, order?: Order, product?: Product): LineItem {
    const id = this.nextId++;
    const newLineItem = LineItem.create(id, lineItem, order, product);
    return addEntity<LineItem>(newLineItem, 'lineItems', this.cacheStore);
  }

  addOrder(order: Partial<Order> = {}, customer?: Customer): Order {
    const id = this.nextId++;
    const newOrder = Order.create(id, order, customer);
    return addEntity<Order>(newOrder, 'orders', this.cacheStore);
  }

  updateCustomer(customer: Partial<Customer>): Customer {
    return updateEntity<Customer>(customer as Customer, 'customers', this.cacheStore);
  }

  updateLineItem(lineItem: Partial<LineItem>): LineItem {
    return updateEntity<LineItem>(lineItem as LineItem, 'lineItems', this.cacheStore);
  }

  updateOrder(order: Partial<Order>): Order {
    return updateEntity<Order>(order as Order, 'orders', this.cacheStore);
  }
  // #endregion save methods
}
