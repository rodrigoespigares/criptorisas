import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dolarEuro',
  standalone: true
})
export class DolarEuroPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    value = value.slice(1);
    let result = parseFloat(value) * 0.85;
    return result+" €";
  }

}
