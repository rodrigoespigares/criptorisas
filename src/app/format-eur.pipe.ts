import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatEur',
  standalone: true
})
export class FormatEurPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(value>1){
      value = value.toLocaleString('es-ES');
    }
    return value + " €";
  }

}
