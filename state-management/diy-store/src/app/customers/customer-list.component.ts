import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../model';
import { FullNamePipe } from '../shared';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [FullNamePipe],
  styleUrls: ['./customer.css'],
  template: `

    <h4>Customers</h4>

    <table class="table table-striped nav">
      @for(customer of customers; track customer.id) {
        <tr (click)="select(customer)">
          <td><img src="{{customer.photo}}" class="list"> {{ customer | fullname }}</td>
        </tr>
      }
    </table>

  `
})
export class CustomerListComponent {
  @Input() customers: Customer[];
  @Output() selected = new EventEmitter<Customer>();

  select(customer: Customer) {
    this.selected.emit(customer);
  }
}
