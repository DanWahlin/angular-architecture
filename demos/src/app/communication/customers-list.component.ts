import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  SimpleChanges,
} from '@angular/core';
import { Customer } from '../shared/interfaces';
import {
  EventBusService,
  EmitEvent,
  Events,
} from '../core/services/event-bus.service';

@Component({
  selector: 'app-customers-list',
  standalone: true,
  template: `
    <h4>Customers</h4>
    <table class="table table-striped">
      <tr>
        <th>Name</th>
      </tr>
      @for(cust of customers;track cust.id){
      <tr (click)="selectCustomer(cust)">
        <td>{{ cust.name }}</td>
      </tr>
      }
    </table>
    <br />

    @for(msg of logMessages; track msg){
    {{ msg }}
    }
  `,
  styles: `
  tr {
    cursor: pointer;
}
td {
  color: #337ab7;
}

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersListComponent {
  @Input() customers: Customer[] = [];
  @Output() customerSelected = new EventEmitter<Customer>();
  logMessages: string[] = [];

  constructor(private eventBus: EventBusService) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['customers']) {
      this.logMessages.push('ngOnChanges Fired: Customers changed');
    }
  }

  selectCustomer(cust: Customer) {
    // send to parent via output property
    // note: could use eventBus as well if desired but output property
    // would be the preferred method for passing data to am immediate parent
    this.customerSelected.emit(cust);
    // Send customer to any eventBus listeners listening for the CustomerSelected event
    this.eventBus.emit(new EmitEvent(Events.CustomerSelected, cust));
  }
}
