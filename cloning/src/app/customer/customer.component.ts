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
  private destroy$ = new Subject<boolean>();
  customer: Customer;
  customers: Customer[];

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.getCustomer();
    this.getCustomers();
  }
  
  getCustomer() {
    this.customersService.getCustomer(2)
      .pipe(takeUntil(this.destroy$))
      .subscribe(cust => {
        //console.log(cust === this.customer);
        this.customer = cust;
      });
  }

  changed(customer: any) {
    this.customersService.updateCustomer(customer)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
    this.getCustomer();
    this.getCustomers();
  }

  getCustomers() {
    this.customersService.getCustomers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(custs => this.customers = custs);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();    
  }

}
