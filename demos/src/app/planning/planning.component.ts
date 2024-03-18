import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  standalone: true,
  template: `
    <h1>Planning Your Architecture</h1>
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vT9WrzJ4gh3tIJ-V0hx9ogMk6fpm0A7SaIo0QBQa5_er5r7yXWyi7hiYkjZkT7O44tKpW7Tot-tery8/embed?start=false&loop=false&delayms=3000"
      frameborder="0"
      width="900"
      height="535"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    ></iframe>
  `,
})
export class PlanningComponent {}
