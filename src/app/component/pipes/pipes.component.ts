import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  pais = 'Argentina';
  tipoUsuario = '1';
  toLower = 'ESTOESTABAENMAYUSCULAS';
  date = Date.now();
  currency = 123123;
  decimal = 321.987456456;
  percent = 0.5;
  tiempoAntiguo = 1633252432886;
  miTexto = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus itaque tenetur repellat quia commodi, quae, nisi numquam cupiditate, tempora et asperiores odio labore officia soluta illo voluptatibus doloribus porro corrupti?'
  cantidadDeCaracteresParaMostrar = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
