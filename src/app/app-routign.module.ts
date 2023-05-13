import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonajeComponent } from './component/personaje/personaje.component';
import { InfoPersonajeComponent } from './component/infoPersonaje/info-personaje/info-personaje.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/personaje', pathMatch: 'full' },
      { path: 'personaje', component: PersonajeComponent },
      { path: 'personaje/:id', component: InfoPersonajeComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutignModule {}
