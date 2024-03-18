import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  SimpleChanges,
} from '@angular/core';
import { Customer } from '../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  standalone: true,
  template: `
    <h4>Customers</h4>
    <table class="table table-striped">
      <tr>
        <th>Name</th>
      </tr>
      @for(cust of customers;track cust.id) {
      <tr
        (click)="selectCustomer(cust)"
        [class.selected]="cust.name === selectedCustomer?.name"
      >
        <td>{{ cust.name }}</td>
      </tr>
      }
    </table>
    <br />
    @for(msg of logMessages; track msg) {
    {{ msg }}
    }
  `,
  styles: `
  tr {
    cursor: pointer;
  }
  table {
    width: 250px
  }
  .selected {
    background-color: yellow;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersListComponent {
  @Input() customers: Customer[] = [];
  @Output() customerSelected = new EventEmitter<Customer>();
  selectedCustomer: Customer | undefined;
  logMessages: string[] = [];

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['customers']) {
      this.logMessages.push('Customers changed');
    }
  }

  selectCustomer(cust: Customer) {
    this.selectedCustomer = cust;
    this.customerSelected.emit(cust);
  }
}
