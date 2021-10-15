import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoLargoPersonalizado'
})
export class TextoLargoPersonalizadoPipe implements PipeTransform {

  transform(value: string, cantCaracteres: number): unknown {
    if(value.length > cantCaracteres){
      return value.substring(0,cantCaracteres)+'...';
    }
    return value;
  }

}
