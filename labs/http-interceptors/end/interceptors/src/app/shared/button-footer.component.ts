import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-footer',
  template: `
    <button
      class="link"
      [ngClass]="className"
      [attr.aria-label]="label"
      tabindex="0"
      [attr.data-id]="item.id"
      (click)="handleClick()"
    >
      <i [ngClass]="iconClasses"></i> <span>{{ label }}</span>
    </button>
  `
})
export class ButtonFooterComponent {
  @Input() label;
  @Input() className;
  @Input() iconClasses;
  @Input() item;
  @Input() dataId;

  @Output() clicked = new EventEmitter<any>();

  handleClick() {
    this.clicked.emit(this.item);
  }
}
