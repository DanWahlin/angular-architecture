import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private subject$: Subject<string>;
  observable$: Observable<string>;

  // BehaviorSubject Example
  // private subject$;
  // observable$: Observable<string>;

  // ReplaySubject Example
  // private subject$: ReplaySubject<string>;
  // observable$: Observable<string>;

  // AsyncSubject Example
  // private subject$: AsyncSubject<string>;
  // observable$: Observable<string>;

  constructor() {
    this.init();
  }

  init() {
    // Create Subject and Observable Here 
    // this.subject$ = new Subject<string>();
    // this.observable$ = this.subject$.asObservable();

    this.subject$ = new BehaviorSubject(null);
    this.observable$ = this.subject$.asObservable();

    // this.subject$ = new ReplaySubject();
    // this.observable$ = this.subject$.asObservable();

    // this.subject$ = new AsyncSubject();
    // this.observable$ = this.subject$.asObservable();

    setInterval(() => {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      this.subject$.next(time);
    }, 3000)

  }

}
