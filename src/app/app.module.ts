import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListonsuperiorComponent } from './Componentes/listonsuperior/listonsuperior.component';
import { BotonesComponent } from './Componentes/botones/botones.component';
import { DlrComponent } from './Componentes/dlr/dlr.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { AcercadeComponent } from './Componentes/acercade/acercade.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListonsuperiorComponent,
    BotonesComponent,
    DlrComponent,
    FooterComponent,
    InicioComponent,
    AcercadeComponent,
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
