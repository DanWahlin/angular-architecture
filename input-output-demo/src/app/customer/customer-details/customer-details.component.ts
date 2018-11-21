import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: any;
  @Output() customerChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.customer.name = 'Gina Doe';
    setTimeout(() => {
      this.customer.name = 'Tina Doe';
    }, 1000);
  }

  change() {
    this.customer.name = 'Michelle Doe';
    this.customerChanged.emit(this.customer);
  }

}
