import { Component, OnInit, OnDestroy } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../core/model/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss']
})
export class CustomersEditComponent implements OnInit, OnDestroy {

  customerForm = this.formBuilder.group({
    id: [],
    name: [ '', Validators.required ],
    city: [ '', Validators.required ]
  });

  customer: Customer;
  loading$: Observable<boolean>;
  sub: Subscription;

  constructor(
      private customersService: CustomersService,
      private router: Router,
      private formBuilder: UntypedFormBuilder,
      private route: ActivatedRoute) {
        this.loading$ = this.customersService.loading$;
      }



  ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.sub = this.customersService.getByKey(id).subscribe(customer => {
        if (customer) {
          this.customer = customer;
          this.customerForm.patchValue(this.customer);
        }

      })
  }

  submit() {
    if (this.customerForm.valid) {
      const customerValue = { ...this.customer, ...this.customerForm.value };
      this.customersService.update(customerValue);
      this.router.navigate(['/customers']);
    }
  }

  add(customer: Customer) {
    this.customersService.add(customer);
  }

  delete(customer: Customer) {
      this.customersService.delete(customer);
  }

  update(customer: Customer) {
      this.customersService.update(customer);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
