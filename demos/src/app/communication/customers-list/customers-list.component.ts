import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { ICustomer } from '../../shared/interfaces';
import { EventBusService, EmitEvent, Events } from '../../core/services/event-bus.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: [ './customers-list.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersListComponent implements OnInit {
  @Input() customers: ICustomer[];
  @Output() customerSelected = new EventEmitter<ICustomer>();
  logMessages: string[] = [];

  constructor(private eventbus: EventBusService) { }

  ngOnInit() {

  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['customers']) {
      this.logMessages.push('ngOnChanges Fired: Customers changed');
    }
  }

  selectCustomer(cust: ICustomer) {
    this.customerSelected.emit(cust);
    this.eventbus.emit(new EmitEvent(Events.CustomerSelected, cust));
  }

}
