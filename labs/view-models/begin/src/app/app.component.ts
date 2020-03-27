import { Component } from '@angular/core';
import { CustomerOrdersDataService } from './services';
import { expandCollapse } from './animations';

/** Describes the ViewModel Class Demo */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [expandCollapse]
})
export class AppComponent { 
  constructor(public dataservice: CustomerOrdersDataService) {
    this.resetData();
  }

  showJson = false;

  resetData() {
    this.dataservice.reset();
  }
}