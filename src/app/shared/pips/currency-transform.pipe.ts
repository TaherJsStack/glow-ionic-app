import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyTransform'
})
export class CurrencyTransformPipe implements PipeTransform {

  transform(value: string): string {
    const amount = parseFloat(value);
    const transformedAmount = amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return transformedAmount !== '$NaN' ? transformedAmount : '0';
  }

}
