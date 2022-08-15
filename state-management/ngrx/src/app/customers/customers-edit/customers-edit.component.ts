import { Component, OnInit, OnDestroy } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../core/model/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerSelectors, EntityState } from '../../store';
import * as CustomerAction from '../../store/actions';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss']
})
export class CustomersEditComponent implements OnInit, OnDestroy {

  customerForm = this.formBuilder.group({
    id: [],
    name: ['', Validators.required],
    city: ['', Validators.required]
  });

  customer: Customer;
  loading$: Observable<boolean>;
  sub: Subscription;

  constructor(
    private store: Store<EntityState>,
    private customerSelectors: CustomerSelectors,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.customerSelectors.customer$.subscribe(cust => {
      if (cust) {
        this.customer = cust;
        this.customerForm.patchValue(this.customer);
      }
    });
    this.loading$ = this.customerSelectors.loading$;
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new CustomerAction.GetCustomer(id));
  }

  submit() {
    if (this.customerForm.valid) {
      const customerValue = { ...this.customer, ...this.customerForm.value };
      this.store.dispatch(new CustomerAction.UpdateCustomer(customerValue));
      this.router.navigate(['/customers']);
    }

  }

  add(customer: Customer) {
    this.store.dispatch(new CustomerAction.AddCustomer(customer));
  }

  delete(customer: Customer) {
    this.store.dispatch(new CustomerAction.DeleteCustomer(customer));
  }

  update(customer: Customer) {
    this.store.dispatch(new CustomerAction.UpdateCustomer(customer));
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
