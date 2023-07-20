import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DlrComponent } from './Componentes/dlr/dlr.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';


@NgModule({
  declarations: [
    AppComponent,
    DlrComponent,
    FooterComponent,
    InicioComponent,
    EncabezadoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
