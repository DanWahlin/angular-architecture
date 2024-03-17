import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './core/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ToolbarComponent],
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
