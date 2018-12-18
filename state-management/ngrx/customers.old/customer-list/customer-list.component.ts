import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Customer, MasterDetailCommands } from '../../core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent {
  @Input() customers: Customer[];
  @Input() selectedCustomer: Customer;
  @Input() commands: MasterDetailCommands<Customer>;

  byId(customer: Customer) {
    return customer.id;
  }

  onSelect(customer: Customer) {
    this.commands.select(customer);
  }

  deleteCustomer(customer: Customer) {
    this.commands.delete(customer);
  }
}
