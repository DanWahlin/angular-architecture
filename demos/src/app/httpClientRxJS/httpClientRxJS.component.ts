import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientRxJSService } from '../core/services/httpClientRxJS.service';

@Component({
  selector: 'app-httpclientrxjs',
  templateUrl: './httpClientRxJS.component.html',
  styleUrls: [ './httpClientRxJS.component.css' ]
})
export class HttpClientRxJSComponent implements OnInit  {

  characters$: Observable<any[]>;
  charactersAndHomeworlds$: Observable<{}>;
  planets$: Observable<any[]>;
  data: { characters: any[], planets: any[]};
  showJSON = false;

  constructor(private dataService: HttpClientRxJSService) { }

  ngOnInit() {
    // this.characters$ = this.dataService.getCharacters();
    // this.planets$ = this.dataService.getPlanets();

    //Get both characters and planets at same time
    this.dataService.getCharactersAndPlanets()
      .subscribe(data => this.data = data);
    this.charactersAndHomeworlds$ = 
      this.dataService.getCharacterAndHomeworld();
  }

}
