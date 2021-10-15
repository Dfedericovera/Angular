import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tiempoTranscurrido'
})
export class TiempoTranscurridoPipe implements PipeTransform
{

  transform(value: number, ...args: unknown[]): unknown
  {
    let ahora = Date.now();
    let antes = new Date(value);
    let milisegundo = ahora - antes.getTime();
    let segundos: any = Math.floor(milisegundo / 1000);
    let minutos: any = 0;
    let horas = 0
    let dias = Math.floor(horas / 24);
    let mensaje = "Han pasado: ";
    if (segundos > 60)
    {
      minutos = Math.floor(segundos / 60);
      segundos = segundos % minutos;
      if (minutos > 60)
      {
        horas = Math.floor(minutos / 60);
        minutos = minutos % horas;
      }
      if (horas > 24)
      {
        dias = Math.floor(horas / 24);
        horas = horas % dias;
      }
      if (dias != 0)
      {
        mensaje = mensaje + dias + " días y ";
      }
      if (minutos < 10)
      {
        minutos = "0" + minutos;
      }
      if (segundos < 10)
      {
        segundos = "0" + segundos;
      }
      mensaje = mensaje + horas + "hs " + minutos + "min " + segundos + 'seg';
    } else
    {
      mensaje = "Recien ";
    }
    return mensaje;
  }

}
