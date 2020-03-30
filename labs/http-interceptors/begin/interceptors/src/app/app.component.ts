import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <app-header-bar></app-header-bar>
      <div class="section columns">
        <main class="column">
          <app-heroes></app-heroes>
        </main>
      </div>
    </div>
  `
})
export class AppComponent {
  title = "interceptors";
}
