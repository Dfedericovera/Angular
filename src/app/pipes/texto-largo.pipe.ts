import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoLargo'
})
export class TextoLargoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value.length > 7){
      return value.substring(0,7)+'...';
    }
    return value;
  }

}
