import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-widget2',
    templateUrl: './widget2.component.html',
    styleUrls: ['./widget2.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class Widget2Component extends BaseComponent implements OnInit {
  constructor() {
    super();
   }

}
