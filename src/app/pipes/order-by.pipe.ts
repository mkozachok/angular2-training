import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(products: any, args?: any): any {
    if (args !== undefined) {
      const field = args.field;
      const lowFirst = args.lowFirst;
      return products.sort((a, b) => {
        if (lowFirst) {
          return a[field] > b[field]
        } else {
          return a[field] < b[field]
        }
      });
    } else {
      return products;
    }
  }

}
