import { Component } from '@angular/core';
import { Widget1Component } from './widget1.component';
import { Widget2Component } from './widget2.component';

@Component({
  selector: 'app-component-inheritance',
  standalone: true,
  imports: [Widget1Component, Widget2Component],
  template: `
    <h1>Component Inheritance</h1>

    <app-widget1 [label]="'Name'"></app-widget1>
    <br /><br />
    <app-widget2 [label]="'Notes'"></app-widget2>
  `,
})
export class ComponentInheritanceComponent {}
