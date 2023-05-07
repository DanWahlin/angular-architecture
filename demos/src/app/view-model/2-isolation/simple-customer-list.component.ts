import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../model';
import { FullNamePipe } from '../../shared/fullname.pipe';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-simple-customer-list',
    styleUrls: ['../view-model.css'],
    template: `
    <h4>Customers</h4>

    <table class="table table-striped nav">
      <tr *ngFor="let customer of customers" (click)="selectCustomer(customer)">
        <td>{{ customer | fullname }}</td>
      </tr>
    </table>
  `,
    standalone: true,
    imports: [NgFor, FullNamePipe]
})
export class SimpleCustomerListComponent {
  @Input() customers: Customer[] = [];
  @Output() customerSelected = new EventEmitter<Customer>();

  selectCustomer(customer: Customer) {
    this.customerSelected.emit(customer);
  }
}
