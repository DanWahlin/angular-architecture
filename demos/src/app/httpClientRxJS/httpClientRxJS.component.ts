import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { combineAll, concatMapTo, combineLatest, buffer } from 'rxjs/operators';
import { HttpClientRxJSService } from '../core/services/httpClientRxJS.service';

@Component({
  selector: 'app-httpclientrxjs',
  templateUrl: './httpClientRxJS.component.html',
  styleUrls: [ './httpClientRxJS.component.css' ]
})
export class HttpClientRxJSComponent implements OnInit  {

  characters$: Observable<any[]>;
  characterWithHomeworld$: Observable<{}>;
  charactersWithHomeworld: Observable<any>;
  planets$: Observable<any[]>;
  charactersAndPlanets: { characters: any[], planets: any[]};
  showCharactersAndPlanetsJSON = false;
  showCharacterAndHomeworldJSON = false;
  

  constructor(private dataService: HttpClientRxJSService) { }

  ngOnInit() {
    // this.characters$ = this.dataService.getCharacters();
    // this.planets$ = this.dataService.getPlanets();

    // Get both characters and planets at same time
    // Uses forkJoin
    this.dataService.getCharactersAndPlanets()
      .subscribe(data => this.charactersAndPlanets = data);

    // Get character and its homeworld
    // Uses switchMap
    this.characterWithHomeworld$ = 
      this.dataService.getCharacterAndHomeworld();

      this.charactersWithHomeworld = this.dataService.getCharactersAndHomeworlds();
  }

}
