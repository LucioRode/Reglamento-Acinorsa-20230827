import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listonsuperior',
  templateUrl: './listonsuperior.component.html',
  styleUrls: ['./listonsuperior.component.css']
})
export class ListonsuperiorComponent implements OnInit {

  txtBtnLogin: string = "LOGIN";
  sGh: boolean = false;
  sLi: boolean = false;
  sIns: boolean = false;
  sFb: boolean = false;
  sTw: boolean = false;
  sLog: boolean = true;
  gh: string = "https://github.com/LucioRode";
  li: string = "https://www.linkedin.com/in/delgadoluciorodrigo/";
  ins: string = "https://www.instagram.com/DelgadoLucioRodrigo/";
  fb: string = "https://www.facebook.com/DelgadoLucioRodrigo/";
  tw: string = "";

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.checkRedes();
  }

  // Aca checkeo que redes sociales hay cargados y cargo los link para mostrarlos
  checkRedes(): void {

    // Check si hay link a Github
    if (this.gh.length >= 1) {
      this.sGh = true;
    } else {
      this.sGh = false;
    }

    // Check si hay link a LinkedIn
    if (this.li.length >= 1) {
      this.sLi = true;
    } else {
      this.sLi = false;
    }

    // Check si hay link a Instagram
    if (this.ins.length >= 1) {
      this.sIns = true;
    } else {
      this.sIns = false;
    }

    // Check si hay link a Facebook
    if (this.fb.length >= 1) {
      this.sFb = true;
    } else {
      this.sFb = false;
    }

    // Check si hay link a Twitter
    if (this.tw.length >= 1) {
      this.sTw = true;
    } else {
      this.sTw = false;
    }
  }

  logeo(): void {
    this.router.navigate(['/login']);
  }

}
