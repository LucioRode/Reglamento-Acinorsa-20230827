import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-session',
  templateUrl: './inicio-session.component.html',
  styleUrls: ['./inicio-session.component.css']
})
export class InicioSessionComponent implements OnInit {

  errorInicio : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
  }

}
