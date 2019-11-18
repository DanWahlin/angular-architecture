import {
  Component,
  Input,
  ElementRef,
  EventEmitter,
  OnChanges,
  Output,
  ViewChild,
  SimpleChanges
} from '@angular/core';

import { Hero } from '../../core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnChanges {
  @Input() hero: Hero;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<Hero>();
  @Output() update = new EventEmitter<Hero>();

  @ViewChild('name', { static: true }) nameElement: ElementRef;

  addMode = false;
  editingHero: Hero;

  ngOnChanges(changes: SimpleChanges) {
    this.setFocus();
    if (this.hero && this.hero.id) {
      this.editingHero = { ...this.hero };
      this.addMode = false;
    } else {
      this.editingHero = { id: undefined, name: '', saying: '' };
      this.addMode = true;
    }
  }

  addHero() {
    this.add.emit(this.editingHero);
    this.clear();
  }

  clear() {
    this.unselect.emit();
  }

  saveHero() {
    if (this.addMode) {
      this.addHero();
    } else {
      this.updateHero();
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateHero() {
    this.update.emit(this.editingHero);
    this.clear();
  }
}
