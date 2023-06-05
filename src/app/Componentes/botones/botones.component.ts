import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { truncate } from 'fs';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  statusMenuCel : boolean = false;
  iconMenu : boolean = true;

  constructor(private router : Router) {
  }

  ngOnInit(): void {
  }

  inicio(): void {
    this.router.navigate(['/inicio']);
    this.menuCel();
  }

  acercade(): void {
    this.router.navigate(['/acercade']);
    this.menuCel();
  }

  experiencia(): void {
    this.router.navigate(['/experiencia']);
    this.menuCel();
  }

  educacion(): void {
    this.router.navigate(['/educacion']);
    this.menuCel();
  }

  skills(): void {
    this.router.navigate(['/skills']);
    this.menuCel();
  }

  proyectos(): void {
    this.router.navigate(['/proyectos']);
    this.menuCel();
  }

  contacto(): void {
    this.router.navigate(['/contacto']);
    this.menuCel();
  }

  menuCel(): void {
    if(this.statusMenuCel !== false){
    this.statusMenuCel = false;
    this.iconMenu = true;
  } else {
    this.statusMenuCel = true;
    this.iconMenu = false;
  }
  }
}
