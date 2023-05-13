import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonajeComponent } from './component/personaje/personaje.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutignModule } from './app-routign.module';
import { InfoPersonajeComponent } from './component/infoPersonaje/info-personaje/info-personaje.component';
@NgModule({
  declarations: [AppComponent, PersonajeComponent, InfoPersonajeComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutignModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
