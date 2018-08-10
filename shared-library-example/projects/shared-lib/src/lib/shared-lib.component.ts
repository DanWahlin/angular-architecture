import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lib-component',
  template: `
    <p>
      shared-lib works!
    </p>
  `,
  styles: []
})
export class SharedLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
