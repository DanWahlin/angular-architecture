import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'age' })
export class AgePipe implements PipeTransform {
  transform(birthDate: Date | string ): number | null {
    return calcAge(birthDate);
  }
}

export function calcAge(birthDate: Date | string ): number | null {
  if (birthDate == null) {
    return null;
  }

  const date = birthDate instanceof Date ? birthDate : new Date(birthDate);
  if (isNaN(date.getFullYear())) {
    return null;
  } else {
    const ageDifMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDifMs); // ms from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
