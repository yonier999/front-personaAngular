import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarPersonasComponent } from './components/listar-personas/listar-personas.component';
import { NavBArComponent } from './components/nav-bar/nav-bar.component';
import { FormularioPersonaComponent } from './components/formulario-persona/formulario-persona.component';
import { APP_ROUTING } from './app.rutas';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarPersonasComponent,
    NavBArComponent,
    FormularioPersonaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
