import { Component, OnInit, OnDestroy } from '@angular/core';

import { SubjectService } from '../core/services/subject.service';
import { SubSink } from 'subsink';

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
  subsink = new SubSink();

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
          this.subsink.sink = this.subjectService.subjectObservable$.subscribe(custs => {
            this.subjectObservableData.push(custs);
          })
        };
        break;

      case ActionType.behaviorSubject:
        action = () => {
          this.subsink.sink = this.subjectService.behaviorSubjectObservable$.subscribe(custs => {
            this.behaviorSubjectObservableData.push(custs);
          })
        };
        break;

      case ActionType.replaySubject:
        action = () => {
          this.subsink.sink = this.subjectService.replaySubjectObservable$.subscribe(custs => {
            this.replaySubjectObservableData.push(custs);
          })
        };
        break;

      case ActionType.asyncSubject:
        action = () => {
          this.subsink.sink = this.subjectService.asyncSubjectObservable$.subscribe(custs => {
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
    this.subsink.unsubscribe();
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
