import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';
import { HttpClientRxJSService } from '../core/services/httpClientRxJS.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor, AsyncPipe, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-httpclientrxjs',
    templateUrl: './httpClientRxJS.component.html',
    styleUrls: ['./httpClientRxJS.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor, AsyncPipe, JsonPipe]
})
export class HttpClientRxJSComponent implements OnInit  {

  formGroup!: FormGroup;
  searchCharacters$!: Observable<any[]>;
  characters$!: Observable<any[]>;
  characterWithHomeworld$!: Observable<{}>;
  charactersWithHomeworld$!: Observable<any>;
  planets$!: Observable<any[]>;
  charactersAndPlanets!: { characters: any[], planets: any[]};
  showCharactersAndPlanetsJSON = false;
  showCharacterAndHomeworldJSON = false;
  

  constructor(private dataService: HttpClientRxJSService) { }

  ngOnInit() {
    // Get both characters and planets at same time
    // Uses forkJoin
    this.dataService.getCharactersAndPlanets()
      .subscribe(data => this.charactersAndPlanets = data);

    // Get character and its homeworld
    // Uses switchMap
    this.characterWithHomeworld$ = 
      this.dataService.getCharacterAndHomeworld();

    this.charactersWithHomeworld$ = this.dataService.getCharactersAndHomeworlds();

    this.searchCharacters();
  }


  searchCharacters() {
    this.formGroup = new FormGroup({
      characterName: new FormControl('', [Validators.required])
    });

    const valueChanges = this.formGroup.get('characterName')?.valueChanges;
    if (valueChanges) {
      this.searchCharacters$ = valueChanges
      .pipe(
        debounceTime(500), 
        switchMap(name => {
          return this.dataService.getCharacter(name);
        })
      );
    }

  }
}
