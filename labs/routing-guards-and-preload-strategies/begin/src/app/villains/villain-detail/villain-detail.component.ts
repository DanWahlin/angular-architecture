import {
  Component,
  Input,
  ElementRef,
  EventEmitter,
  OnChanges,
  Output,
  ViewChild,
  SimpleChanges,
} from '@angular/core';

import { Villain } from '../../core';
import {
  Validators,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.scss'],
})
export class VillainDetailComponent implements OnChanges {
  @Input() villain: Villain;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<Villain>();
  @Output() update = new EventEmitter<Villain>();

  @ViewChild('name', { static: true }) nameElement: ElementRef;

  addMode = false;

  form = this.fb.group({
    id: [],
    name: ['', Validators.required],
    saying: [''],
  });

  constructor(private fb: UntypedFormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    this.setFocus();
    if (this.villain && this.villain.id) {
      this.form.patchValue(this.villain);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addVillain(form: UntypedFormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.villain, ...value });
    }
    this.clear();
  }

  clear() {
    this.unselect.emit();
  }

  saveVillain(form: UntypedFormGroup) {
    if (this.addMode) {
      this.addVillain(form);
    } else {
      this.updateVillain(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateVillain(form: UntypedFormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.villain, ...value });
    }
    this.clear();
  }
}
