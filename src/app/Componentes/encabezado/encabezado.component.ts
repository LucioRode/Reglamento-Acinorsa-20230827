import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  banner = "http://delgadoluciorodrigo.acinorsa.com.ar/assets/img/defect/bannerdefect.png";
  photoprofile = "http://delgadoluciorodrigo.acinorsa.com.ar/assets/img/defect/profiledefect.png";
  nombreCompleto = "Delgado Lucio Rodrigo"; 
  ocupacion = "Desarrollador Full Stack jr";
  provincia = "Santa Fe ";
  pais = "Argentina";
  imgEstudio = "https://static.prodasoftware.com/SuccessCase/c/e/s/39f4a89a4c822f40!cessi.jpg"

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  contacto() : void {
    this.router.navigate(['/contacto']);
  }

}
