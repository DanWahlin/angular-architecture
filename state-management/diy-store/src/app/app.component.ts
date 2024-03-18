import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CustomerOrdersDataService } from './services';
import { expandCollapse } from './animations';

import { CustomerContainerComponent } from './customers/customer-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="wrapper">
      <h2>DIY Store</h2>

      <ul>
        <li>
          <a class="pointer" (click)="showJson = !showJson">{{
            showJson ? 'Hide Customer JSON' : 'Show Customer JSON'
          }}</a>
        </li>
        <li>
          <a class="pointer" (click)="clearCache()" title="Clear cache"
            >Clear</a
          >
        </li>
        <li>
          <a class="pointer" (click)="reload()" title="Reload cache from Db"
            >Reload</a
          >
        </li>
        <li>
          <a
            class="pointer"
            (click)="resetData()"
            title="Reset the server with mock data"
            >Reset</a
          >
        </li>
      </ul>

      <section id="content">
        <app-customer-container />
      </section>

      @if(showJson) {
      <div [@expandCollapse]>
        <pre id="customer-json">{{
          dataservice.customers$ | async | json
        }}</pre>
      </div>
      }
      <p></p>
    </div>
  `,
  imports: [AsyncPipe, JsonPipe, CustomerContainerComponent],
  styles: `
    .wrapper {
      margin: 20px;
    }

    .pointer {
        cursor: pointer;
    }

    ul {
        padding: 0;
        list-style-type: none;
    }

    ul li {
        display: inline;
        margin-right: 15px;
        font-weight: bold;
    }
  `,
  animations: [expandCollapse],
})
export class AppComponent {
  showJson = false;

  constructor(public dataservice: CustomerOrdersDataService) {
    this.dataservice.loadAll().subscribe();
  }

  clearCache() {
    this.dataservice.clearCache();
  }

  reload() {
    this.dataservice.loadAll().subscribe();
  }

  resetData() {
    this.dataservice.reset();
  }
}
