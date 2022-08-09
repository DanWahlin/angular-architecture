import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.css']
})
export class Widget1Component extends BaseComponent implements OnInit {
 
  constructor() { 
    super();
  }

}
