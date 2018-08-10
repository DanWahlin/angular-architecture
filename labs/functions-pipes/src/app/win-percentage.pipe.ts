import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'winPercentage'
})
export class WinPercentagePipe implements PipeTransform {

  transform(value: any): any {
    console.log('In winPercentage pipe');
    return value.wins/(value.wins + value.losses);
  }

}
