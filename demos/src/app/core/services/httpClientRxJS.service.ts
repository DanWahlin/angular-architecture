import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of, from } from 'rxjs';
import { tap, map, switchMap, catchError, mergeMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpClientRxJSService {

  baseUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getCharacter(name: string) {
    if (name) {
      return this.http.get(this.baseUrl + 'people/?search=' + name)
        .pipe(
          map((res: any) => res.results),
          catchError(() => of(null))
        )
    }
    return of(null);
  }

  getCharacters() {
    return this.http.get(this.baseUrl + 'people/')
      .pipe(
        tap(() => {
          console.log('Before getCharacters map');
        }),
        map((res: any) => {
          return res.results;
        }),
        tap(() => {
          console.log('After getCharacters map');
        })
      );
  }

  getPlanets() {
    return this.http.get(this.baseUrl + 'planets/')
      .pipe(
        tap(() => {
          console.log('Before getPlanets map');
        }),
        map((res: any) => {
          return res.results;
        }),
        tap(() => {
          console.log('After getPlanets map');
        })
      );
  }

  //Could simplify the above functions with this one
  getResource(url: string) {
    return this.http.get(url)
      .pipe(
        tap(() => {
          console.log('Before map');
        }),
        map((res: any) => {
          return res.results;
        }),
        tap(() => {
          console.log('After map');
        })
      );
  }

  getCharactersAndPlanets() {
    return forkJoin([
      this.getCharacters(),
      this.getPlanets()
    ])
    .pipe(
      map((res: any) => {
        return { characters: res[0], planets: res[1] };
      }),
      catchError(error => of(error))
    );
  }

  getCharactersAndHomeworlds() {
    return this.http.get(this.baseUrl + 'people/')
      .pipe(
        switchMap((res: any) => {
          // convert array to observable
          return from(res.results);
        }),
        // concatMap((person: any) => {
        mergeMap((person: any) => { 
            return this.http.get(this.convertHttps(person.homeworld))
              .pipe(
                map(hw => {
                  person.homeworld = hw;
                  return person;
                })
              );
        }),
        toArray()
      );
  }

  getCharacterAndHomeworld() {
    const url = this.baseUrl + 'people/1/';
    return this.http.get(url)
      .pipe(
        switchMap((character: any) => {
          return this.http.get(this.convertHttps(character.homeworld))
            .pipe(
              map(hw => {
                character.homeworld = hw;
                return character;
              })
            )
        })
      );
  }

  getCharacterHomeworld(charUrl: string) {
    return this.http.get(charUrl)
      .pipe(
        switchMap((character: any) => {
          return this.http.get(this.convertHttps(character.homeworld));
        })
      );
  }

  // API requires https but returns hypermedia links that are http://. Fixing that.
  convertHttps(url: string) {
    if (url) {
      return url.replace('http://', 'https://');
    }
    return url;
  }

}