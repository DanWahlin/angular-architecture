import { Injectable } from '@angular/core';
import { filter, map, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

    private subject$ = new Subject<EmitEvent>();

    /** Listen for event; take action when event raised */
    on(event: Events, action: (value?: any) => void): Subscription {
      return this.subject$.pipe(
        filter((e: EmitEvent) => e.name === event),
        map((e: EmitEvent) => e.value)
      )
      .subscribe(action);
    }

    /** Raise event */
    emit(event: EmitEvent) {
      this.subject$.next(event);
    }
}

export enum Events {
  CustomerSelected,
}

/** Event object with name and optional value*/
export class EmitEvent {
  constructor(public name: any, public value?: any) { };
}
