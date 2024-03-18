import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-modules',
  template: `
    <h1>Features and Modules</h1>
    Each feature should have it's own module and routing module. Click one of
    the links below to lazy load the feature module.
    <br /><br />
    <a routerLink="customers">Customers Feature</a>&nbsp;&nbsp;
    <a routerLink="orders">Orders Feature</a>
    <br /><br />
    <img src="/assets/features-modules.png" width="600px" />
    <br /><br />
    <router-outlet></router-outlet>
  `,
  styles: `
  a {
    font-weight: bold;
    font-size: 14pt;
    text-decoration: underline;
}
  `,
})
export class FeaturesModulesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
