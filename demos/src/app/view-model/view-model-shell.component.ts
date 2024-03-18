import { Component } from '@angular/core';
import { CustomerOrdersDataService } from './services';
import { expandCollapse } from '../animations';

@Component({
  selector: 'app-co-shell',
  styles: `
    .button-row {
      margin: 1em 0;
    }

    .button-row button {
      margin-right: 0.5em;
    }

    h3.lab {
      color: white;
      font-size: 140%;
      margin: 0;
      padding: 0.5em 0.5em;
      text-align: center;
      width: 30em;
    }
    h3.lab.begin {
      background-color: #17a2b8;
    }

    h3.lab.end {
      color: white;
      background-color: #28a745;
    }

    table.nav tr {
      cursor: pointer;
      color: #337ab7;
    }

    table.nav tr:hover {
      text-decoration: underline;
    }

    td.right,
    th.right {
      text-align: right;
    }

    td.right input {
      padding-right: 4px;
      text-align: right;
    }

    td input.memo {
      width: 20em;
    }

    td img.details {
      border-radius: 25%;
      width: 130px;
      height: 140px;
    }

    tr.line-item input {
      width: 3em;
    }

    ol.nav-links {
      padding-left: 1.2em;
    }

    section#content {
      margin-top: 3em;
    }

    section#lab-content {
      margin-top: 0em;
    }

    #customer-json {
      max-width: 35em;
    }
  `,
  animations: [expandCollapse],
  template: `
    <h1>ViewModel</h1>
    <div class="nav-links">
      <div><a routerLink="simple">1. Simply the beginning</a></div>
      <div><a routerLink="isolation">2. Isolation</a></div>
      <div><a routerLink="vm-class">3. ViewModel Class</a></div>
      <div><a routerLink="customers-orders">4. Customers & Orders</a></div>
    </div>
    <p></p>
    <div><a (click)="resetData()">Reset data</a></div>
    <div>
      <a (click)="showJson = !showJson">{{
        showJson ? 'Hide customers' : 'Show customers'
      }}</a>
    </div>

    <section id="content">
      <router-outlet></router-outlet>
    </section>

    @if(showJson){
    <div [@expandCollapse]>
      <pre id="customer-json">{{ dataservice.customers$ | async | json }}</pre>
    </div>
    }
    <p></p>
  `,
})
export class CustomersOrdersShellComponent {
  constructor(public dataservice: CustomerOrdersDataService) {
    this.resetData();
  }

  showJson = false;

  resetData() {
    this.dataservice.reset();
  }
}
