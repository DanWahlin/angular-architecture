import { Component, OnInit, OnDestroy } from '@angular/core';

import { ICustomer, SubjectService } from '../core/services/subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects',
  standalone: true,
  template: `
    <h1>Using RxJS Subjects</h1>
    All of the functionality for this demo is in core/subject.service.ts and the
    subjects folder. Click Start to begin.
    <br /><br />

    <button (click)="start()">Start</button>

    <h2 class="status">Status:</h2>
    <textarea class="status-area" title="Status"> {{ status }} </textarea>

    <div class="row">
      <div class="col-md-3">
        <h4>Subject</h4>
        <ul>
          @for(data of subjectObservableData; track data.length){
          <li>{{ data.length }}</li>
          }
        </ul>
      </div>
      <div class="col-md-3">
        <h4>BehaviorSubject</h4>
        <br />
        <ul>
          @for(data of behaviorSubjectObservableData; track data.length){
          <li>{{ data.length }}</li>
          }
        </ul>
      </div>
      <div class="col-md-3">
        <h4>ReplaySubject</h4>
        <br />
        <ul>
          @for(data of replaySubjectObservableData; track data.length){
          <li>{{ data.length }}</li>
          }
        </ul>
      </div>
      <div class="col-md-3">
        <h4>AsyncSubject</h4>
        <br />
        <ul>
          @for(data of asyncSubjectObservableData; track data.length){
          <li>{{ data.length }}</li>
          }
        </ul>
      </div>
    </div>

    <br />
    <strong>Subject</strong>
    Only subscribers receive data
    <br /><br />
    <strong>BehaviorSubject</strong>
    Note how this picks up the last value emitted event though it subscribed
    after the value was sent out. That's because BehaviorSubject allows an
    initial value to be sent to an observer as they subscribe.
    <br /><br />
    <strong>ReplaySubject</strong>
    Note how this stays in sync with everything above even though it subscribes
    10 seconds after the subject. That's because it's replaying everything up to
    that point from a cache it maintains.
    <br /><br />
    <strong>AsyncSubject</strong>
    This only plays the last item before it completes - nothing before that. It
    "completes" in the data service once the customers array length is greater
    than 5.
    <br /><br />
  `,
  styles: [
    `
      .status-area {
        color: red;
        width: 100%;
        height: 120px;
        scroll-behavior: smooth;
        overflow-y: scroll;
      }
      .status {
        color: red;
      }
    `,
  ],
})
export class SubjectsComponent implements OnInit, OnDestroy {
  status = '';
  subjectObservableData: ICustomer[][] = [];
  behaviorSubjectObservableData: ICustomer[][] = [];
  replaySubjectObservableData: ICustomer[][] = [];
  asyncSubjectObservableData: ICustomer[][] = [];
  timeoutIds: any[] = [];
  subs = new Subscription();

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {}

  start() {
    this.subjectService.start();
    this.runAction('Calling SubjectService start()', null, null);
    this.runAction('Subscribing to Subject', ActionType.subject, 2000);
    this.runAction(
      'Subscribing to BehaviorSubject (6 seconds after subject)',
      ActionType.behaviorSubject,
      8000
    );
    this.runAction(
      'Subscribing to ReplaySubject (10 seconds after subject)',
      ActionType.replaySubject,
      13000
    );
    this.runAction(
      'Subscribing to AsyncSubject (12 seconds after subject)',
      ActionType.asyncSubject,
      15000
    );
  }

  runAction(
    actionText: string,
    actionType: ActionType | null,
    delay: number | null
  ) {
    let action: () => void;
    switch (actionType) {
      case ActionType.subject:
        action = () => {
          this.subs.add(
            this.subjectService.subjectObservable$.subscribe((custs) => {
              this.subjectObservableData.push(custs);
            })
          );
        };
        break;

      case ActionType.behaviorSubject:
        action = () => {
          this.subs.add(
            this.subjectService.behaviorSubjectObservable$.subscribe(
              (custs) => {
                this.behaviorSubjectObservableData.push(custs);
              }
            )
          );
        };
        break;

      case ActionType.replaySubject:
        action = () => {
          this.subs.add(
            this.subjectService.replaySubjectObservable$.subscribe((custs) => {
              this.replaySubjectObservableData.push(custs);
            })
          );
        };
        break;

      case ActionType.asyncSubject:
        action = () => {
          this.subs.add(
            this.subjectService.asyncSubjectObservable$.subscribe((custs) => {
              this.asyncSubjectObservableData.push(custs);
            })
          );
        };
        break;
    }

    // update status and perform action
    const timeoutId: any = setTimeout(
      () => {
        this.status = this.status + actionText.trim() + '\n';
        if (action) {
          console.log('in');
          action();
        }
      },
      delay ? delay : 0
    );
    this.timeoutIds.push(timeoutId);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    for (const id of this.timeoutIds) {
      clearInterval(id);
    }
  }
}

enum ActionType {
  subject,
  behaviorSubject,
  replaySubject,
  asyncSubject,
}
