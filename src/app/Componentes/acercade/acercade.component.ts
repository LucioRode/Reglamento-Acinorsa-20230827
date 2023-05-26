import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  descrip = "Aca se describe al personaje del perfil"
  constructor() { }

  ngOnInit(): void {
  }

}
