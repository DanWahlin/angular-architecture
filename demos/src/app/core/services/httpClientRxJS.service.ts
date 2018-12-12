import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { tap, map, switchMap, toArray, mergeMap, merge, catchError } from 'rxjs/operators';

@Injectable()
export class HttpClientRxJSService {

  baseUrl = 'https://swapi.co/api/';

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(this.baseUrl + 'people')
      .pipe(
        tap(results => {
          console.log('Before getCharacters map');
        }),
        map(res => {
          return res['results'];
        }),
        tap(results => {
          console.log('After getCharacters map');
        })
      );
  }

  getPlanets() {
    return this.http.get(this.baseUrl + 'planets')
      .pipe(
        tap(results => {
          console.log('Before getPlanets map');
        }),
        map(res => {
          return res['results'];
        }),
        tap(results => {
          console.log('After getPlanets map');
        })
      );
  }

  //Could simplify the above functions with this one
  getResource(url) {
    return this.http.get(url)
      .pipe(
        tap(results => {
          console.log('Before map');
        }),
        map(res => {
          return res['results'];
        }),
        tap(results => {
          console.log('After map');
        })
      );
  }

  getCharactersAndPlanets() {
    return forkJoin(
      this.getCharacters(),
      this.getPlanets()
    )
    .pipe(
      map((res) => {
        return { characters: res[0], planets: res[1]}
      }),
      catchError(error => of(error))
    );
  }

  getCharactersAndHomeworlds() {
    return this.http.get(this.baseUrl + 'people')
      .pipe(
        map(res => {
          return of(...res['results']);
        }),
        switchMap(char => {
          return char;
        })
      )
  }

  getCharacterAndHomeworld() {
    const url = 'https://swapi.co/api/people/1';
    return this.http.get(url)
      .pipe(
        switchMap(character => {
          return this.http.get(character['homeworld'])
            .pipe(
              map(hw => {
                character['homeworld'] = hw;
                return character;
              })
            )
        }),

      );
  }

  getCharacterHomeworld(charUrl) {
    return this.http.get(charUrl)
      .pipe(
        switchMap(character => this.http.get(character['homeworld']))
      );
  }

}