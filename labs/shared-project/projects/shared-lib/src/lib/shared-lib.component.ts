import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-lib',
  template: `
    <p>
      shared-lib works!
    </p>
  `,
  styles: [
  ]
})
export class SharedLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
