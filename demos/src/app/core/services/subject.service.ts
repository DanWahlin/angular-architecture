import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  customers = [];
  intervalIds = [];
  private subject$: Subject<ICustomer>;
  subjectObservable$: Observable<ICustomer>;

  private behaviorSubject$;
  behaviorSubjectObservable$: Observable<ICustomer>;

  private replaySubject$: ReplaySubject<ICustomer>;
  replaySubjectObservable$: Observable<ICustomer>;

  private asyncSubject$: AsyncSubject<ICustomer>;
  asyncSubjectObservable$: Observable<ICustomer>;

  constructor() { }

  start() {
    this.initSubjects();

    // simulate array getting new data from a data source
    let intervalId = setInterval(() => {
      let len = this.customers.length;
      this.customers.push({
        name: 'Customers ' + len,
        city: 'City ' + len
      });
      let clone = JSON.parse(JSON.stringify(this.customers));
      this.subject$.next(clone);
      this.behaviorSubject$.next(clone);
      this.replaySubject$.next(clone);
      this.asyncSubject$.next(clone);

      if (this.customers.length > 10) {
        this.asyncSubject$.complete();
      }
    }, 3000);

    this.intervalIds.push(intervalId);
  }

  initSubjects() {
    this.subject$ = new Subject();
    this.subjectObservable$ = this.subject$.asObservable();

    this.behaviorSubject$ = new BehaviorSubject(this.customers);
    this.behaviorSubjectObservable$ = this.behaviorSubject$.asObservable();

    this.replaySubject$ = new ReplaySubject();
    this.replaySubjectObservable$ = this.replaySubject$.asObservable();

    this.asyncSubject$ = new AsyncSubject();
    this.asyncSubjectObservable$ = this.asyncSubject$.asObservable();
  }

}

export interface ICustomer {
  name: string;
  city: string;
}