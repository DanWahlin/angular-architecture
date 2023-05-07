import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-features-modules',
    templateUrl: './features-modules.component.html',
    styleUrls: ['./features-modules.component.css'],
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class FeaturesModulesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
