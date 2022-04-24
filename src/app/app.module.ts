import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarPersonasComponent } from './components/listar-personas/listar-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPersonasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
