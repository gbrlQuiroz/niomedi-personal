import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './general/acerca-de/acerca-de.component';
import { Error404Component } from './general/error404/error404.component';
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

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
