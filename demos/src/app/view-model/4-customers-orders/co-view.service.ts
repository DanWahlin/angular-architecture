import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CustomerOrdersDataService } from '../services';
import { CustomerVm } from './customer-vm';
import { createOrderVm, OrderVm } from './order-vm';

/** ViewService creates and manages Customer and Order ViewModels */
@Injectable({ providedIn: 'root' })
export class CustomersOrdersViewService {
  customerVms$: Observable<CustomerVm[]>;

  constructor(private dataService: CustomerOrdersDataService) {
    this.customerVms$ = this.createCustomerVms$();
  }

  addCustomer() {
    return CustomerVm.create();
  }

  private createCustomerVms$(): Observable<CustomerVm[]> {
    return this.dataService.customers$.pipe(
      map(customers => customers.map(customer => {
          const watchOrders$ = this.dataService.watchCustomerOrders(customer);
          return CustomerVm.create(customer, watchOrders$);
        })
      )
    );
  }

  selectedOrderVm(orderId: number, customerVm: CustomerVm): Observable<OrderVm> {
    return this.dataService.getOrderGraphByOrderId(orderId).pipe(
      map(orderGraph => createOrderVm(customerVm, orderGraph))
    );
  }

  saveCustomer(customerVm: CustomerVm) {
    const customer = customerVm.toCustomer();
    customer.id == null
      ? this.dataService.addCustomer(customer)
      : this.dataService.updateCustomer(customer);
  }

  /** Limited save. Can only update certain aspects of an existing order .*/
  saveOrder(orderVm: OrderVm) {
    const { orderId, orderDate, memo, lineItems } = orderVm;
    this.dataService.updateOrder({ id: orderId, orderDate, memo });
    lineItems.forEach(item => {
      const { id, quantity } = item;
      this.dataService.updateLineItem({ id, quantity });
    });
  }
}
