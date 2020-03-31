import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-list-header",
  template: `
    <div class="content-title-group">
      <a router-link="/">
        <h2 class="title">{{ title }}</h2>
      </a>
      <button
        class="button refresh-button"
        (click)="handleRefresh()"
        aria-label="refresh"
      >
        <i class="fas fa-sync" aria-hidden="true"></i>
      </button>
    </div>
  `
})
export class ListHeaderComponent implements OnInit {
  @Input() title: string;
  @Output() refresh = new EventEmitter();

  ngOnInit() {}

  handleRefresh() {
    this.refresh.emit();
  }
}
