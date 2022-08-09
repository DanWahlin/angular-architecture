import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject, ReplaySubject, 
         AsyncSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  customers: ICustomer[] = [];
  intervalIds: any[] = [];
  private subject$: Subject<ICustomer[]> = new Subject<ICustomer[]>;
  subjectObservable$: Observable<ICustomer[]> = of([]);

  private behaviorSubject$: BehaviorSubject<ICustomer[]> = new BehaviorSubject<ICustomer[]>([]);
  behaviorSubjectObservable$: Observable<ICustomer[]> = of([])

  private replaySubject$: ReplaySubject<ICustomer[]> = new ReplaySubject<ICustomer[]>;
  replaySubjectObservable$: Observable<ICustomer[]> = of([])

  private asyncSubject$: AsyncSubject<ICustomer[]> = new AsyncSubject<ICustomer[]>();
  asyncSubjectObservable$: Observable<ICustomer[]> = of([])

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
      let clone: ICustomer[] = JSON.parse(JSON.stringify(this.customers));
      this.subject$.next(clone);
      this.behaviorSubject$.next(clone);
      this.replaySubject$.next(clone);
      this.asyncSubject$.next(clone);

      if (this.customers.length > 5) {
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