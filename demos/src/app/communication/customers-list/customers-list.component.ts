import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { Customer } from '../../shared/interfaces';
import { EventBusService, EmitEvent, Events } from '../../core/services/event-bus.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: [ './customers-list.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersListComponent {
  @Input() customers: Customer[];
  @Output() customerSelected = new EventEmitter<Customer>();
  logMessages: string[] = [];

  constructor(private eventbus: EventBusService) { }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['customers']) {
      this.logMessages.push('ngOnChanges Fired: Customers changed');
    }
  }

  selectCustomer(cust: Customer) {
    this.customerSelected.emit(cust);
    this.eventbus.emit(new EmitEvent(Events.CustomerSelected, cust));
  }

}
