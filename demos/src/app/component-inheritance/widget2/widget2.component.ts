import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.css']
})
export class Widget2Component extends BaseComponent implements OnInit {
  constructor() {
    super();
   }

}
