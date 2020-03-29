import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomersOrdersViewService } from './co-view.service';
import { CustomerVm, OrderSummaryVm } from './customer-vm';
import { OrderVm } from './order-vm';

/**
 * Master/Detail following the Container/Presenter pattern.
 * Master: customer list of Customer ViewModels
 * Customer Detail: detail about a selected Customer
 * Order Detail: detail about a selected Order for the selected Customer
 */
@Component({
  selector: 'app-co-container',
  styleUrls: ['../view-model.css'],
  template: `
    <button (click)="addCustomer()" class="btn btn-primary button-row">Add Customer</button>

    <div *ngIf="customerVms$ | async as vms" class="row">
      <!-- Customer List -->
      <div class="col-md-2">
        <app-co-customer-list [vms]="vms" (selected)="selectCustomer($event)"></app-co-customer-list>
      </div>

      <!-- Customer Details -->
      <div class="col-md-5">
        <app-co-customer-details
          [vm]="selectedCustomerVm"
          (selectOrder)="selectOrder($event)"
          (cancel)="cancelCustomer()"
          (save)="saveCustomer($event)"
        >
        </app-co-customer-details>
      </div>

      <!-- Order Details -->
      <div class="col-md-5">
        <app-co-order-details [vm]="selectedOrderVm$ | async" (cancel)="cancelOrder()" (save)="saveOrder($event)">
        </app-co-order-details>
      </div>
    </div>
  `
})
export class CustomersOrdersContainerComponent {
  customerVms$: Observable<CustomerVm[]>;
  selectedCustomerVm: CustomerVm;
  selectedOrderVm$: Observable<OrderVm>;

  constructor(private viewService: CustomersOrdersViewService) {
    this.customerVms$ = viewService.customerVms$;
  }

  addCustomer() {
    this.selectedCustomerVm = this.viewService.addCustomer();
  }

  cancelCustomer() {
    this.selectedCustomerVm = null;
    this.cancelOrder();
  }

  cancelOrder() {
    this.selectedOrderVm$ = null;
  }

  saveCustomer(customerVm: CustomerVm) {
    this.selectedCustomerVm = null;
    this.selectedOrderVm$ = null;
    this.viewService.saveCustomer(customerVm);
  }

  saveOrder(orderVm: OrderVm) {
    this.selectedOrderVm$ = null;
    this.viewService.saveOrder(orderVm);
  }

  selectCustomer(vm: CustomerVm) {
    this.selectedCustomerVm = vm.clone();
    this.cancelOrder();
  }

  selectOrder(orderSummary: OrderSummaryVm) {
    this.selectedOrderVm$ = this.viewService.selectedOrderVm(orderSummary.id, this.selectedCustomerVm);
  }
}
