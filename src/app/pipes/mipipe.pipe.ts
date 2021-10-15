import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mipipe'
})
export class MipipePipe implements PipeTransform {

  transform(value: string): string {
    if(value == '1'){
      return 'Administrador'
    }
    else{
      return 'Usuario';
    }
  }

}
