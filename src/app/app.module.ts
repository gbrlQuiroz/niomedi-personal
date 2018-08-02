import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './+general/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavegacionComponent,
    // AcercaDeComponent,
    // Error404Component,
    // DatosGeneralesComponent,
    // DatosRelativosSaludComponent,
    // ContactosEmergenciaComponent,
    // IdentidadComponent,
    // ComplementariosClinicosComponent,
    // AntecedentesFamiliaresComponent,
    // PersonalesPatologicosComponent,
    // HabitosPersonalesComponent,
    // CondicionesVidaComponent,
    // HistoriaLaboralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
