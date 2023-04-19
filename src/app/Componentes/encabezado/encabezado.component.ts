import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  nombreCompleto = "Delgado Lucio Rodrigo"; 
  ocupacion = "Desarrollador Full Stack jr";
  provincia = "Santa Fe ";
  pais = "Argentina";

  constructor() { }

  ngOnInit(): void {
  }

}
