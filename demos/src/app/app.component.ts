import { Component, OnInit } from '@angular/core';

import {
  EventBusService,
  Events,
  EmitEvent,
} from './core/services/event-bus.service';
import { Customer } from './shared/interfaces';
import { Subscription } from 'rxjs';
import { DataService } from './core/services/data.service';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-default">
      <div class="navbar-header">
        <a href="#/">
          <img src="assets/angular.png" class="logo" title="Logo" />
        </a>
      </div>
      <ul class="nav navbar-nav nav-pills">
        @for(item of navItems; track item.link) {
        <li routerLinkActive="active">
          <a routerLink="{{ item.link }}">{{ item.name }}</a>
        </li>
        }
      </ul>
      @if(customers){
      <strong class="pull-right circle">
        {{ customers.length }}
      </strong>
      }
    </nav>

    @if(customer){
    <strong class="pull-right" style="padding-right: 10px">
      Current Customer: {{ customer.name }}
    </strong>
    }

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: `
  .circle {
  height: 20px;
  width: 20px;
  border-radius: 50px;
  padding-left: 6px;
  background: red;
  color: white;
  margin-top: 15px;
  margin-right: 10px;
}

  `,
})
export class AppComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer | null = null;
  eventBusSub: Subscription = new Subscription();
  customersChangedSub: Subscription = new Subscription();

  constructor(
    private eventBus: EventBusService,
    private dataService: DataService
  ) {}

  navItems: { link: string; name: string }[] = [
    { link: '/planning', name: 'Planning' },
    { link: '/features-modules', name: 'Features' },
    { link: '/structuring-components', name: 'Components' },
    { link: '/pipes-functions', name: 'Pipes/Functions' },
    { link: '/communication', name: 'Communication' },
    { link: '/view-model', name: 'ViewModel' },
    { link: '/subjects', name: 'Subjects' },
    { link: '/component-inheritance', name: 'Inheritance' },
    { link: '/httpclient-rxjs', name: 'HttpClient/RxJS' },
    { link: '/signals', name: 'Signals' },
  ];

  ngOnInit() {
    //Example of using an event bus to provide loosely coupled communication (mediator pattern)
    this.eventBusSub = this.eventBus.on(
      Events.CustomerSelected,
      (cust: Customer) => {
        this.customer = cust;
        console.log(
          'EventBus Event: Selected Customer -',
          this.customer ? this.customer.name : 'None'
        );
      }
    );

    //Example of using BehaviorSubject to be notified when a service changes
    this.customersChangedSub = this.dataService.customersChanged$.subscribe(
      (custs) => (this.customers = custs)
    );

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
