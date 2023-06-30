import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })

  phoneNumber : number = 5493482622020; 
  email : string = "delgadoluciorodrigo@gmail.com";
  linkedIn : string = "https://www.linkedin.com/in/delgadoluciorodrigo/";
  userLinkedIn : string = "delgadoluciorodrigo";

  constructor() {
  }

  ngOnInit(): void {
  }


}
