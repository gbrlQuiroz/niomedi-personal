import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MiNuevoComponenteComponent } from './contactos-emergencia/mi-nuevo-componente/mi-nuevo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // MiNuevoComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
