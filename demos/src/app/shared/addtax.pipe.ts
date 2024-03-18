import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addtax',
})
export class AddTaxPipe implements PipeTransform {
  transform(price: number): number {
    if (price) {
      return this.getTotalPrice(price);
    }
    return price;
  }

  getTotalPrice(price: number) {
    console.log('addtax pipe called');
    let total = price + price * 0.08;
    return total;
  }
}
