import { Component, OnInit } from '@angular/core';

import { EventBusService, Events } from './core/services/event-bus.service';
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
  customers: Customer[];
  customer: Customer;
  eventbusSub: Subscription;
  customersChangedSub: Subscription;

  constructor(private eventbus: EventBusService, private dataService: DataService) {}

  ngOnInit() {
    //Example of using an event bus to provide loosely coupled communication (mediator pattern)
    this.eventbusSub = this.eventbus.on(Events.CustomerSelected, cust => (this.customer = cust));

    //Example of using BehaviorSubject to be notified when a service changes
    this.customersChangedSub = this.dataService.customersChanged$.subscribe(custs => (this.customers = custs));
  }

  ngOnDestroy() {
    // AutoUnsubscribe decorator above makes these calls unnecessary
    // this.eventbusSub.unsubscribe();
    // this.customersChangedSub.unsubscribe();
  }
}
