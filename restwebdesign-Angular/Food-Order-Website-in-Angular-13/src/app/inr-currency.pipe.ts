import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'inrCurrency'
})
export class InrCurrencyPipe implements PipeTransform {
  transform(value: number | string, symbolDisplay: boolean = true, digitsInfo: string = '1.2-2'): string {
    const currencyCode = '₹'; 
    const currencyPipe = new CurrencyPipe('en-IN');
    const formattedValue = currencyPipe.transform(value, currencyCode, symbolDisplay, digitsInfo);

    
    return formattedValue ? formattedValue : '';
  }
}
