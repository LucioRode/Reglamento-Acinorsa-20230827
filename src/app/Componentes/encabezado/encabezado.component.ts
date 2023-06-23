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
  ciudad = "Reconquista";
  provincia = "Santa Fe ";
  pais = "Argentina";
  edit = true;
  editOn = false;
  sContacto = false;
  txtContacto : string = "Información de contacto";
  email = "delgadoluciorodrigo@gmail.com";
  phonenumber : number = 5493482622020;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  verContacto(): void {
    if(this.sContacto == true){
      this.sContacto = false;
      this.txtContacto = "Información de contacto";
    } else {
      this.sContacto = true;
      this.txtContacto = "Ocultar Información";
    }
  }
  
  
  


}
