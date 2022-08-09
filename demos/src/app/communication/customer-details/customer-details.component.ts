import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../shared/interfaces';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailsComponent {

  @Input() customer: Customer = {} as Customer;

}
