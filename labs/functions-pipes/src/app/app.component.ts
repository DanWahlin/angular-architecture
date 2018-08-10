import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  league: string;
  teams = [
    { name: 'Sharks', league: 'A', wins: 10, losses: 5 },
    { name: 'Vultures', league: 'B', wins: 2, losses: 13 },
    { name: 'Lizards', league: 'B', wins: 7, losses: 8 },
    { name: 'Dogs', league: 'A', wins: 15, losses: 0 }
  ];
  

  winPercentage(team) {
    console.log('In winPercentage()');
    return team.wins/(team.wins + team.losses);
  }
}
