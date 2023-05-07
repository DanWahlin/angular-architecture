import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-widget1',
    templateUrl: './widget1.component.html',
    styleUrls: ['./widget1.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class Widget1Component extends BaseComponent implements OnInit {
 
  constructor() { 
    super();
  }

}
