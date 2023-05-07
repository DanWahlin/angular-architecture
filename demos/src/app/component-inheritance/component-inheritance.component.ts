import { Component, OnInit } from '@angular/core';
import { Widget2Component } from './widget2/widget2.component';
import { Widget1Component } from './widget1/widget1.component';

@Component({
    selector: 'app-component-inheritance',
    templateUrl: './component-inheritance.component.html',
    styleUrls: ['./component-inheritance.component.css'],
    standalone: true,
    imports: [Widget1Component, Widget2Component]
})
export class ComponentInheritanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
