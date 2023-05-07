import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { CustomerOrdersDataService } from '../services';
import { Customer } from '../model';
import { CustomerVmPlus } from './customer-vm-plus';
import { VmPlusCustomerDetailsComponent } from './vm-plus-customer-details.component';
import { VmPlusCustomerListComponent } from './vm-plus-customer-list.component';
import { NgIf, AsyncPipe } from '@angular/common';

/**
 * Master/Detail following the Container/Presenter pattern.
 * Master: customer list of Customer ViewModels
 * Detail: detail about a selected Customer ViewModel
 */
@Component({
    selector: 'app-vm-plus-container',
    styleUrls: ['../view-model.css'],
    template: `
    <!-- Notice that there are no more event bindings! -->
    <button (click)="addCustomer()" class="btn btn-primary button-row">Add Customer</button>

    <div *ngIf="vms$ | async as vms" class="row">
      <!-- Customer List -->
      <div class="col-md-2">
        <app-vm-plus-customer-list [vms]="vms"></app-vm-plus-customer-list>
      </div>

      <!-- Customer Details -->
      <div class="col-md-5">
        <app-vm-plus-customer-details [vm]="selectedVm"></app-vm-plus-customer-details>
      </div>
    </div>
  `,
    standalone: true,
    imports: [NgIf, VmPlusCustomerListComponent, VmPlusCustomerDetailsComponent, AsyncPipe]
})
export class VmPlusContainerComponent {
  vms$!: Observable<CustomerVmPlus[]>;
  selectedVm: CustomerVmPlus | null = null;

  constructor(private dataService: CustomerOrdersDataService) {
    this.createVm$();
  }

  /** Create observable of Customer ViewModels from cached customers */
  createVm$() {
    this.vms$ = this.dataService.customers$.pipe(
      map(customers => customers.map(customer => this.toCustomerVmPlus(customer)))
    );
  }

  addCustomer() {
    this.selectedVm = this.toCustomerVmPlus();
  }

  cancel() {
    this.selectedVm = null;
  }

  save(vm: CustomerVmPlus) {
    this.selectedVm = null;
    const customer = vm.toCustomer();
    customer.id == 0 ? this.dataService.addCustomer(customer) : this.dataService.updateCustomer(customer);
  }

  selected(vm: CustomerVmPlus) {
    this.selectedVm = vm.clone();
  }

  private toCustomerVmPlus(customer?: Customer) {
    const vm = CustomerVmPlus.create(
      customer,
      // Bind to container's action callbacks, replacing presenter emitters.
      // Question: should we do this just because we can?
      this.cancel.bind(this),
      this.save.bind(this),
      this.selected.bind(this)
    );
    return vm;
  }
}
