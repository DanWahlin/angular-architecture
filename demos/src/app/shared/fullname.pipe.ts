import { Pipe, PipeTransform } from '@angular/core';

/** 
 * Transform a "Person" object with `first` and `last` properties into full name string: "{first} {last}".
 * Notice that it must be an "impure" pipe because the properties can change even when the object doesn't.
 * Remove the "pure: false" and see what happens!
 */
@Pipe({
    name: 'fullname', pure: false,
    standalone: true
})
export class FullNamePipe implements PipeTransform {
  transform(person: { first?: string, last?: string }): string {
    return calcFullName(person);
  }
}

export function calcFullName(person: { first?: string, last?: string }): string {
  return person ? ((person.first || '') + ' ' + (person.last || '')).trim() : '';
}
