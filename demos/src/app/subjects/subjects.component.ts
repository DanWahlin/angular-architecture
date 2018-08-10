import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { SubjectService } from '../core/services/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styles: [`
    .status {
      color: red;
    }`
  ]
})
export class SubjectsComponent implements OnInit, OnDestroy {
  status: string;
  subjectObservableData = [];
  behaviorSubjectObservableData = [];
  replaySubjectObservableData = [];
  asyncSubjectObservableData = [];
  timeoutIds = [];

  subjectSub: Subscription;
  behaviorSub: Subscription;
  replaySub: Subscription;
  asyncSub: Subscription;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() { }

  start() {
    this.subjectService.start();
    this.runAction('Calling SubjectService start()', null, null);
    this.runAction('Subscribing to Subject', ActionType.subject, 2000);
    this.runAction('Subscribing to BehaviorSubject (6 seconds after subject)', ActionType.behaviorSubject, 8000);
    this.runAction('Subscribing to ReplaySubject (10 seconds after subject)', ActionType.replaySubject, 13000);
    this.runAction('Subscribing to AsyncSubject (12 seconds after subject)', ActionType.asyncSubject, 15000);
  }

  runAction(actionText: string, actionType: ActionType, delay: number) {
    let action: () => void;
    switch (actionType) {
      case ActionType.subject:
        action = () => {
          this.subjectSub = this.subjectService.subjectObservable$.subscribe(custs => {
            this.subjectObservableData.push(custs);
          })
        };
        break;

      case ActionType.behaviorSubject:
        action = () => {
          this.behaviorSub = this.subjectService.behaviorSubjectObservable$.subscribe(custs => {
            this.behaviorSubjectObservableData.push(custs);
          })
        };
        break;

      case ActionType.replaySubject:
        action = () => {
          this.replaySub = this.subjectService.replaySubjectObservable$.subscribe(custs => {
            this.replaySubjectObservableData.push(custs);
          })
        };
        break;

      case ActionType.asyncSubject:
        action = () => {
          this.asyncSub = this.subjectService.asyncSubjectObservable$.subscribe(custs => {
            this.asyncSubjectObservableData.push(custs);
          })
        };
        break;
    }

    // update status and perform action
    let timeoutId = setTimeout(() => {
      this.status = actionText;
      if (action) {
        console.log('in')
        action();
      }
    }, (delay) ? delay : 0);
    this.timeoutIds.push(timeoutId);
  }

  ngOnDestroy() {
    if (this.subjectSub) {
      this.subjectSub.unsubscribe();
    }
    if (this.behaviorSub) {
      this.behaviorSub.unsubscribe();
    }
    if (this.replaySub) {
      this.replaySub.unsubscribe();
    }
    if (this.asyncSub) {
      this.asyncSub.unsubscribe();
    }
    for (let id of this.timeoutIds) {
      clearInterval(id);
    }
  }

}

enum ActionType {
  subject,
  behaviorSubject,
  replaySubject,
  asyncSubject
}
