import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase1ej1',
  templateUrl: './clase1ej1.component.html',
  styleUrls: ['./clase1ej1.component.css']
})
export class Clase1ej1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'ejercicio';
  edad1: number;
  edad2: number;
  promedio: number;
  suma: number;

  calcular() {
    this.suma = this.sumar(this.edad1, this.edad2);
    this.promedio = this.promediar(this.edad1, this.edad2);
  }
  sumar(num1, num2):number {
    let suma = num1 + num2;
    return suma;
  }
  promediar(num1, num2) {
    let promedio = (num1 + num2) / 2;
    return promedio;
  }
  limpiar(){
    this.promedio=null;
    this.suma=null;
    this.edad1=null;
    this.edad2=null;
  }

}
