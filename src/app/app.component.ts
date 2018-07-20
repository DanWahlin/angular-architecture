import { Component, OnInit } from '@angular/core';

import { EventBusService, Events } from './core/services/event-bus.service';
import { ICustomer } from './shared/interfaces';
import { Subscription } from 'rxjs';
import { DataService } from './core/services/data.service';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit { 
  customers: ICustomer[];
  customer: ICustomer;
  eventbusSub: Subscription;
  dataServiceSub: Subscription;
  
  constructor(private eventbus: EventBusService, private dataService: DataService) { }

  ngOnInit() {
    //Example of using an event bus to provide loosely coupled communication (mediator pattern)
    this.eventbusSub = this.eventbus.on(Events.CustomerSelected, (cust => this.customer = cust));

    //Example of using BehaviorSubject to be notified when a service changes
    this.dataServiceSub = this.dataService.customersChanged$.subscribe(custs => this.customers = custs);
  }

  ngOnDestroy() {
    this.eventbusSub.unsubscribe();
    this.dataServiceSub.unsubscribe();
  }
  
}
