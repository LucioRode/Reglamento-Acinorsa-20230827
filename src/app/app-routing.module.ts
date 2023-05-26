import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { DlrComponent } from './Componentes/dlr/dlr.component';
import { AcercadeComponent } from './Componentes/acercade/acercade.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';

const routes: Routes = [
  {  path: '', component: InicioComponent},
  {  path: 'acercade', component: AcercadeComponent},
  {  path: 'experiencia', component: ExperienciaComponent},
  {  path: 'educacion', component: EducacionComponent},
  {  path: 'skills', component: SkillsComponent},
  {  path: 'proyectos', component: ProyectosComponent},
  {  path: 'contacto', component: ContactoComponent},
  {  path: 'dlr', component: DlrComponent},
  {  path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
