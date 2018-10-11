import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
  customers;
  @Input() customersClass;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.customers = this.dataService.getCustomers();
  }

}
