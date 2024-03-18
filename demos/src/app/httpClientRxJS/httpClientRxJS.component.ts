import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, debounceTime } from 'rxjs';
import {
  HttpClientRxJSService,
  Character,
  Planet,
} from '../core/services/httpClientRxJS.service';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-httpclientrxjs',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, ReactiveFormsModule],
  templateUrl: './httpClientRxJS.component.html',
  styles: `
    p { font-family: Lato;}
  `,
})
export class HttpClientRxJSComponent implements OnInit {
  formGroup!: FormGroup;
  charactersBySearch$!: Observable<Character[] | null>;
  characters$!: Observable<Character[]>;
  charactersWithHomePlanets_forkJoin$!: Observable<Character[]>;
  charactersWithHomePlanets_concatMap$!: Observable<Character[]>;
  charactersWithHomePlanets_combineLatest$!: Observable<Character[]>;
  charactersWithHomePlanets_mergeMap$!: Observable<Character[]>;
  charactersWithHomePlanets_switchMap_FAIL$!: Observable<Character[]>;
  charactersAndPlanets!: { characters: Character[]; planets: Planet[] };
  lukeWithHomePlanet$!: Observable<Character>;
  planets$!: Observable<Planet[]>;
  showCharactersAndPlanetsJSON = false;
  showLukeWithHomePlanetJSON = false;

  constructor(private dataService: HttpClientRxJSService) {}

  ngOnInit() {
    this.dataService
      .getCharactersAndPlanets()
      .subscribe((data) => (this.charactersAndPlanets = data));

    this.lukeWithHomePlanet$ = this.dataService.getLukeWithHomePlanet();

    this.charactersWithHomePlanets_forkJoin$ =
      this.dataService.getCharactersWithHomePlanets_forkJoin();
    this.charactersWithHomePlanets_combineLatest$ =
      this.dataService.getCharactersWithHomePlanets_combineLatest();
    this.charactersWithHomePlanets_concatMap$ =
      this.dataService.getCharactersWithHomePlanets_concatMap();
    this.charactersWithHomePlanets_mergeMap$ =
      this.dataService.getCharactersWithHomePlanets_mergeMap();
    this.charactersWithHomePlanets_switchMap_FAIL$ =
      this.dataService.getCharactersWithHomePlanets_switchMap_FAIL();

    this.setCharactersBySearch$();
  }

  /** Initialize the charactersBySearch$ observable
   * that listens for changes to the characterName form control
   * and retrieves the characters with matching name.
   * Debounces input and uses switchMap to present results for latest search name.
   */
  private setCharactersBySearch$() {
    this.formGroup = new FormGroup({
      characterName: new FormControl('', [Validators.required]),
    });

    // Updates when user types character name textbox
    const searchName$: Observable<string> | undefined =
      this.formGroup.get('characterName')?.valueChanges;

    if (searchName$) {
      this.charactersBySearch$ = searchName$.pipe(
        debounceTime(500),
        switchMap((name) => this.dataService.getCharacterByName(name))
      );
    }
  }
}
