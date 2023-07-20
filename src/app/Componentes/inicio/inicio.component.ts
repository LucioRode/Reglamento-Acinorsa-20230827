import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  sContacto : boolean = false;
  sMasterD : boolean = false;
  sMasterC : boolean = false;
  sJunior : boolean = false;
  sMasterA2 : boolean = false;
  sElite : boolean = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  btncontacto(): void {
    if(this.sContacto == true){
      this.sContacto = false;
    } else {
      this.sContacto = true;
    }
  }

  masterD(): void {
    if(this.sMasterD == true){
      this.sMasterD = false;
    } else {
      this.sMasterD = true;
    }
  }

  masterC(): void {
    if(this.sMasterC == true){
      this.sMasterC = false;
    } else {
      this.sMasterC = true;
    }
  }

  junior(): void {
    if(this.sJunior == true){
      this.sJunior = false;
    } else {
      this.sJunior = true;
    }
  }

  masterA2(): void {
    if(this.sMasterA2 == true){
      this.sMasterA2 = false;
    } else {
      this.sMasterA2 = true;
    }
  }

  elite(): void {
    if(this.sElite == true){
      this.sElite = false;
    } else {
      this.sElite = true;
    }
  }


}
