import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcercaDeComponent } from './+general/acerca-de/acerca-de.component';
import { Error404Component } from './+general/error404/error404.component';
import { DatosGeneralesComponent } from './datos-generales/datos-generales.component';
import { DatosRelativosSaludComponent } from './datos-relativos-salud/datos-relativos-salud.component';
import { ContactosEmergenciaComponent } from './contactos-emergencia/contactos-emergencia.component';
import { IdentidadComponent } from './datos-generales/identidad/identidad.component';
import { ComplementariosClinicosComponent } from './datos-generales/complementarios-clinicos/complementarios-clinicos.component';
import { AntecedentesFamiliaresComponent } from './datos-relativos-salud/antecedentes-familiares/antecedentes-familiares.component';
import { PersonalesPatologicosComponent } from './datos-relativos-salud/personales-patologicos/personales-patologicos.component';
import { HabitosPersonalesComponent } from './datos-relativos-salud/habitos-personales/habitos-personales.component';
import { CondicionesVidaComponent } from './datos-relativos-salud/condiciones-vida/condiciones-vida.component';
import { HistoriaLaboralComponent } from './datos-relativos-salud/historia-laboral/historia-laboral.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AcercaDeComponent
  },
  {
    path: 'datos-generales',
    component: DatosGeneralesComponent,
    children: [
      {
        path: 'identidad',
        component: IdentidadComponent
      },
      {
        path: 'complementarios-clinicos',
        component: ComplementariosClinicosComponent
      }
    ]
  },
  {
    path: 'datos-relativos-salud',
    component: DatosRelativosSaludComponent,
    children: [
      {
        path: 'antecedentes-familiares',
        component: AntecedentesFamiliaresComponent
      },
      {
        path: 'personales-patologicos',
        component: PersonalesPatologicosComponent
      },
      {
        path: 'habitos-personales',
        component: HabitosPersonalesComponent
      },
      {
        path: 'condiciones-vida',
        component: CondicionesVidaComponent
      },
      {
        path: 'historia-laboral',
        component: HistoriaLaboralComponent
      }
    ]
  },
  {
    path: 'contactos-emergencia',
    component: ContactosEmergenciaComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  AcercaDeComponent,
  Error404Component,
  DatosGeneralesComponent,
  DatosRelativosSaludComponent,
  ContactosEmergenciaComponent,
  IdentidadComponent,
  ComplementariosClinicosComponent,
  AntecedentesFamiliaresComponent,
  PersonalesPatologicosComponent,
  HabitosPersonalesComponent,
  CondicionesVidaComponent,
  HistoriaLaboralComponent
]
