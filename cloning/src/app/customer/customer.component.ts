import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomersService } from '../core/customers.service';
import { Customer } from '../shared/interfaces';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  customer: Customer;
  customers: Customer[];

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.getCustomer();
    this.getCustomers();
  }
  
  getCustomer() {
    this.sub.add(this.customersService.getCustomer(2)
      .subscribe(cust => {
        //console.log(cust === this.customer);
        this.customer = cust;
      }));
  }

  changed(customer: Customer) {
    this.sub.add(this.customersService.updateCustomer(customer).subscribe());
    this.getCustomer();
    this.getCustomers();
  }

  getCustomers() {
    this.sub.add(this.customersService.getCustomers().subscribe(custs => this.customers = custs));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();    
  }

}
