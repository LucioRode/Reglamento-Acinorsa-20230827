import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { DlrComponent } from './Componentes/dlr/dlr.component';


const routes: Routes = [
  {  path: '', component: InicioComponent},
  {  path: 'dlr', component: DlrComponent},
  {  path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
