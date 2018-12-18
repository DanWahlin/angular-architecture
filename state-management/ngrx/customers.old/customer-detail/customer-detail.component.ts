import {
  Component,
  Input,
  ElementRef,
  OnChanges,
  ViewChild,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Customer, MasterDetailCommands } from '../../core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailComponent implements OnChanges {
  @Input() hero: Customer;
  @Input() commands: MasterDetailCommands<Customer>;

  @ViewChild('name') nameElement: ElementRef;

  addMode = false;
  form = this.fb.group({
    id: [],
    name: ['', Validators.required],
    saying: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    this.setFocus();
    if (this.hero && this.hero.id) {
      this.form.patchValue(this.hero);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  close() {
    this.commands.close();
  }

  saveHero() {
    const { dirty, valid, value } = this.form;
    if (dirty && valid) {
      const newHero = { ...this.hero, ...value };
      this.addMode ? this.commands.add(newHero) : this.commands.update(newHero);
    }
    this.close();
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }
}
