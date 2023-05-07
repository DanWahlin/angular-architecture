import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../shared/interfaces';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-customer-details',
    templateUrl: './customer-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf]
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer!: Customer;

  constructor() { }

  ngOnInit() {
  }

}
