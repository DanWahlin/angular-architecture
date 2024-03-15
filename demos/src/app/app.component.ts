import { Component, OnInit } from '@angular/core';

import { EventBusService, Events, EmitEvent } from './core/services/event-bus.service';
import { Customer } from './shared/interfaces';
import { Subscription } from 'rxjs';
import { DataService } from './core/services/data.service';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer | null = null;
  eventBusSub: Subscription = new Subscription();
  customersChangedSub: Subscription = new Subscription();

  constructor(private eventBus: EventBusService, private dataService: DataService) {}

  ngOnInit() {
    //Example of using an event bus to provide loosely coupled communication (mediator pattern)
    this.eventBusSub = this.eventBus.on(Events.CustomerSelected, (cust: Customer) => {
      this.customer = cust;
      console.log('EventBus Event: Selected Customer -', this.customer ? this.customer.name : 'None');
    });

    //Example of using BehaviorSubject to be notified when a service changes
    this.customersChangedSub = this.dataService.customersChanged$.subscribe(custs => this.customers = custs);

    // Test by raising event and reporting customer selected
    this.eventBus.emit(new EmitEvent(Events.CustomerSelected, { name: 'Bob' }));
    this.eventBus.emit(new EmitEvent(Events.CustomerSelected)); // no value; clears selected customer

  }

  ngOnDestroy() {
    // AutoUnsubscribe decorator above makes these calls unnecessary
    // this.eventBusSub.unsubscribe();
    // this.customersChangedSub.unsubscribe();
  }
}
