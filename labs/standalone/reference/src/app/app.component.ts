import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="layout">
    <app-toolbar/>
    <div class="content">
      <router-outlet/>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
