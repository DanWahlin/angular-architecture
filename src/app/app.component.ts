import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CustomerOrdersDataService } from './services';
import { expandCollapse } from './animations';

import { CustomerContainerComponent } from './customers/customer-container.component';

/** Describes the ViewModel Class Demo */
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <div class="wrapper">
    <h2>View Model Lab</h2>

    <ul>
      <li><a class="pointer" (click)="resetData()">Reset Data</a></li>
      <li><a class="pointer" (click)="showJson=!showJson">{{ showJson ? 'Hide Customer JSON' : 'Show Customer JSON' }}</a></li>
    </ul>

    <section id="content">
      <app-customer-container/>
    </section>

    @if(showJson) {
      <div [@expandCollapse]>
        <pre id="customer-json">{{ dataservice.customers$ | async | json }}</pre>
      </div>
    }
    <p></p>
  </div>
  `,
  imports: [AsyncPipe, JsonPipe, CustomerContainerComponent],
  styleUrls: ['./app.component.css'],
  animations: [expandCollapse]
})
export class AppComponent {
  constructor(public dataservice: CustomerOrdersDataService) {
    this.resetData();
  }

  showJson = false;

  resetData() {
    this.dataservice.reset();
  }
}
