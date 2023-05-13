import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterDataWrapper } from 'src/app/Model/modelos';
import { PersonajeService } from 'src/app/services/personaje.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info-personaje',
  templateUrl: './info-personaje.component.html',
  styleUrls: ['./info-personaje.component.css'],
})
export class InfoPersonajeComponent {
  public id!: String;
  public personajei$!: Observable<CharacterDataWrapper>;
  hidden: boolean = false;
  constructor(
    private activate: ActivatedRoute,
    private personajeServise: PersonajeService,
    private router: Router
  ) {
    this.activate.params.subscribe((param) => {
      this.id = param['id'];
      console.log(param['id']);
    });

    console.log(
      (this.personajei$ = this.personajeServise.getpersonaje(this.id))
    );
  }

  inforPersonaje() {
    this.router.navigate(['/personaje']);
  }
}
