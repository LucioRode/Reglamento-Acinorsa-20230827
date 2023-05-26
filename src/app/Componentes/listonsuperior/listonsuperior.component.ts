import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listonsuperior',
  templateUrl: './listonsuperior.component.html',
  styleUrls: ['./listonsuperior.component.css']
})
export class ListonsuperiorComponent implements OnInit {

  txtBtnLogin: string = "LOGIN";
  nombreCabecera: string = "Delgado Lucio Rodrigo";

  constructor() { }

  ngOnInit(): void {
  }

}
