import { Component, OnInit, OnDestroy } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { Customer } from '../../core/model/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../customers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss'],
})
export class CustomersEditComponent implements OnInit, OnDestroy {
  customerForm = this.formBuilder.group({
    id: [],
    name: ['', Validators.required],
    city: ['', Validators.required],
  });

  customer: Customer;
  subs = new Subscription();
  constructor(
    private customersService: CustomersService,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subs.add(
      this.customersService.get(id).subscribe((customer) => {
        if (customer) {
          this.customer = customer;
          this.customerForm.patchValue(this.customer);
        }
      })
    );
  }

  submit() {
    if (this.customerForm.valid) {
      const customerValue = {
        ...this.customer,
        ...this.customerForm.value,
      } as Customer;
      if (customerValue.id) {
        this.update(customerValue);
      } else {
        this.add(customerValue);
      }
    }
  }

  add(customer: Customer) {
    this.subs.add(
      this.customersService.add(customer).subscribe(() => {
        this.navigateHome();
      })
    );
  }

  delete() {
    this.subs.add(
      this.customersService.delete(this.customer.id).subscribe(() => {
        this.navigateHome();
      })
    );
  }

  update(customer: Customer) {
    this.subs.add(
      this.customersService.update(customer).subscribe(() => {
        this.navigateHome();
      })
    );
  }

  navigateHome() {
    this.router.navigate(['/customers']);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
