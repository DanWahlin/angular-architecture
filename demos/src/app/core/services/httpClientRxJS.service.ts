import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  from, forkJoin, Observable, of,
  concatMap, catchError, map, mergeMap, switchMap, toArray
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpClientRxJSService {

  baseUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  /** Get Observable of characters with matching name */
  getCharacterByName(name: string): Observable<Character[]> {
    return name
      ? this.http.get(this.baseUrl + 'people/?search=' + name).pipe(
        map((res: any) => res.results),
        catchError(() => of([]))
      )
      : of([]);
  }

  /** Get Observable of "all" Star Wars characters
   * Actually only gets the first page of characters
   */
  private getCharacters(): Observable<Character[]> {
    const url = this.baseUrl + 'people/';
    return this.http.get<{ results: Character[] }>(url).pipe(
      map(res => res.results.sort(byName)),
    );
  }

  /** Get Observable of all Star Wars planets */
  private getPlanets(): Observable<Planet[]> {
    const url = this.baseUrl + 'planets/';
    return this.http.get<{ results: Planet[] }>(url).pipe(
      map(res => res.results.sort(byName)),
    );
  }

  /** Get Observable of Characters and Planets at the same time, using forkJoin */
  getCharactersAndPlanets(): Observable<{ characters: Character[], planets: Planet[] }> {
    // forkJoin can take an object of observables;
    // emits object of last values when all are complete
    return forkJoin({
      characters: this.getCharacters(),
      planets: this.getPlanets()
    });
  }

  /** Get Observable of Characters with their home planets using concatMap.
   * Retrieves each character's home planet with individual calls to the getPlanet API.
   *
   * concatMap() preserves original Character order.
   * It is slower than mergeMap() version
   * because waits for each inner observable to complete
   * before moving on to the next Character.
   *
   * Emitted Characters-with-planets are in the original Character order.
   *
   * NOT RECOMMENDED! TOO MANY HTTP CALLS!
   */
  getCharactersWithHomePlanets_concatMap(): Observable<Character[]> {
    return this.getCharacters().pipe(
      // from() converts Character array to observable of each Character in that array
      // [bob, joe, sally] becomes observable that emits bob, then joe, then sally
      concatMap(characters => from(characters)),

      concatMap(character => this.updateCharacterWithPlanet(character)),

      toArray() // collects all mapped observable emissions into an array, then completes
    );
  }

  /** Get Observable of Characters with their home planets using mergeMap().
   * Retrieves each character's home planet with individual calls to the getPlanet API.
   *
   * mergeMap() is faster than concatMap() version
   * because does not wait for each inner observable to complete
   * before moving on to the next Character.
   *
   * Emitted Characters-with-planets may not be in the original Character order.
   *
   * NOT RECOMMENDED! TOO MANY HTTP CALLS!
   */
  getCharactersWithHomePlanets_mergeMap(): Observable<Character[]> {
    return this.getCharacters().pipe(
      // from() converts Character array to observable of each Character in that array
      // [bob, joe, sally] becomes observable that emits bob, then joe, then sally
      concatMap(characters => from(characters)),

      mergeMap(character => this.updateCharacterWithPlanet(character)),

      toArray() // collects all mapped observable emissions into an array, then completes
    );
  }

  /** TRIES to get Observable of Characters with their home planets using switchMap() and FAILS.
   * It fails because switchMap() is not appropriate here.
   * The inner Characters observable emits synchronously
   * so there is no time to get the planets and update the Characters ...
   * except for the last one.
   */
  getCharactersWithHomePlanets_switchMap_FAIL(): Observable<Character[]> {
    return this.getCharacters().pipe(

      // CONFUSING! SwitchMap implies that source emits multiple times; never true here.
      switchMap(characters => from(characters)),

      // DISASTER! Source observable emits synchronously,
      // discarding the inner observables before they can fetch planets
      // See all the canceled requests in the Network tab.
      switchMap(character => this.updateCharacterWithPlanet(character)),

      toArray() // collects all mapped observable emissions into an array, then completes
    );
  }

  /** Get Observable of Characters with their home planets using forkJoin().
   * Fastest version because retrieves all characters and planets
   * at the same time (just two API calls),
   * then matches them up.
   *
   * Emitted Characters-with-planets are in the original Character order.
   */
  getCharactersWithHomePlanets_forkJoin(): Observable<Character[]> {
    // forkJoin, like `Promise.all()`, can take an array of observables;
    //  emits array of last values when all are complete
    return forkJoin([
      this.getCharacters(),
      this.getPlanets()
    ]).pipe(
      map(([characters, planets]) => {
        // Add homePlanet to each character
        return characters.map(character => {
          character.homePlanet = planets.find(p => p.url === character.homeworld);
          return character;
        });
      })
    );
  }

  /** Returns observable of the Character with its home planet set after getting planet from API. */
  private updateCharacterWithPlanet(character: Character): Observable<Character> {
    return this.http.get<Planet>(character.homeworld).pipe(
      map(planet => {
        character.homePlanet = planet;
        return character;
      })
    );
  }

  /** Get Observable of Luke Skywalker and his home planet */
  getLukeWithHomePlanet(): Observable<Character> {
    const url = this.baseUrl + 'people/1/'; // Luke Skywalker
    return this.http.get<Character>(url).pipe(
      concatMap(character => this.updateCharacterWithPlanet(character))
    );
  }

  /** Get Observable of character's homeworld planet */
  // Why? Not called.
  private getCharacterHomeworld(characterUrl: string): Observable<Planet> {
    return this.http.get<Character>(characterUrl).pipe(
      concatMap(character => {
        return this.http.get<Planet>(character.homeworld);
      })
    );
  }

  // API requires https but returns hypermedia links that are http://. Fixing that.
  // No longer called ???
  private convertHttps(url: string) {
    return url ? url.replace('http://', 'https://') : url;
  }

}

/** Compare function for sorting by name */
function byName(a: { name: string }, b: { name: string }) {
  return a.name.localeCompare(b.name);
}

/** Star Wars Character */
export interface Character {
  name: string;
  films: string[]; // urls for films
  /** URL of the character's home world. */
  homeworld: string; // planet url
  /** Character's home world planet. Not in the Character data; set by code. */
  homePlanet?: Planet;
  url: string;
  // more fields
}

/** Star Wars Planet */
export interface Planet {
  name: string;
  films: string[]; // urls for films
  population: number;
  residents: string[]; // urls for characters
  url: string;
  // more fields
}
