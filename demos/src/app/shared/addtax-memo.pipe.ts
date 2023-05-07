import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
    name: 'addtaxmemo',
    standalone: true
})
export class AddTaxMemoPipe implements PipeTransform, OnDestroy {

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

  ngOnDestroy() {
    console.log('Pipe Destroyed....BOOM!')
  }

}