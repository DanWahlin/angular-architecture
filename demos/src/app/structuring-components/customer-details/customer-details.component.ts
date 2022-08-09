import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../shared/interfaces';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer = {} as Customer;

  constructor() { }

  ngOnInit() {
  }

}
