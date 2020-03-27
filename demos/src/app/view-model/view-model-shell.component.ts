import { Component } from '@angular/core';
import { CustomerOrdersDataService } from './services';
import { expandCollapse } from '../animations';

@Component({
  selector: 'app-co-shell',
  styleUrls: ['./view-model.css'],
  animations: [expandCollapse],
  template: `
    <h1>ViewModel</h1>
    <div class="nav-links">
      <div><a routerLink="simple">1. Simply the beginning</a></div>
      <div><a routerLink="isolation">2. Isolation</a></div>
      <div><a routerLink="vm-class">3. ViewModel Class</a></div>
      <div><a routerLink="vm-class-plus">3(b). ViewModel Wonder Class (digression)</a></div>
      <div><a routerLink="customers-orders">4. Customers & Orders</a></div>
    </div>
    <p></p>
    <div><a (click)="resetData()">Reset data</a></div>
    <div><a (click)="showJson=!showJson">{{ showJson ? 'Hide customers' : 'Show customers' }}</a></div>

    <section id="content">
      <router-outlet></router-outlet>
    </section>

    <div *ngIf="showJson" [@expandCollapse]>
      <pre id="customer-json" >{{ dataservice.customers$ | async | json }}</pre>
    </div>
    <p></p>
  `
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