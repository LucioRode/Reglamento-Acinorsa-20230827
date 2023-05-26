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
  imgEstudio = "https://static.prodasoftware.com/SuccessCase/c/e/s/39f4a89a4c822f40!cessi.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
