import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubjectsService } from './core/subjects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription1Data = [];
  subscription2Data = [];
  subscription3Data = [];

  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;

  constructor(private subjectsService: SubjectsService) {}

  ngOnInit() {}

  subscribe1() {
    this.sub1 =this.subjectsService.observable$.subscribe(data => this.subscription1Data.push(data));
  }

  subscribe2() {
    this.sub2 =this.subjectsService.observable$.subscribe(data => this.subscription2Data.push(data));
  }

  subscribe3() {
    this.sub3 =this.subjectsService.observable$.subscribe(data => this.subscription3Data.push(data));
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }

}
