import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'addtaxmemo'
})
export class AddTaxMemoPipe implements PipeTransform {
  @memo()
  transform(price: number): number {
    if (price) {
      return this.getTotalPrice(price);
    }
    return price;
  }

  getTotalPrice(price: number) {
    console.log('addtaxmemo pipe called');
    let total = price + (price * .08);
    return total;
  }

}