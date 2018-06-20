import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

function getTotalPrice(price: number) {
  console.log('addtax pipe called');
  let total = price + (price * .08);
  return total;
}

@Pipe({
  name: 'addtax'
})
export class AddTaxPipe implements PipeTransform {
  @memo()
  transform(price: number): number {
    if (price) {
      return getTotalPrice(price);
    }
    return price;
  }

}
