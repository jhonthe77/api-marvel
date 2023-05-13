import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime } from 'rxjs';
import { CharacterDataWrapper } from 'src/app/Model/modelos';
import { PersonajeService } from 'src/app/services/personaje.service';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css'],
})
export class PersonajeComponent {
  public personaje$!: Observable<CharacterDataWrapper>;
  public name$!: Observable<String>;
  public name: String = '';
  public select: boolean = false;
  imagen: boolean = false;
  mostrar: boolean = false;
  cantida: number = 20;
  searchControl = new FormControl();

  constructor(
    private personajeServise: PersonajeService,
    private router: Router
  ) {
    this.name$ = this.personajeServise.nameperson;

    this.personaje$ = this.personajeServise.getpersonajes(
      this.name,
      this.cantida
    );

    this.searchControl.valueChanges
      .pipe(debounceTime(600))
      .subscribe((name) => {
        this.name = name;
        this.onInputChange();
      });
    this.searchControl.valueChanges
      .pipe(debounceTime(600))
      .subscribe((cantida) => {
        this.cantida = cantida;
        this.onInputChange();
      });
  }

  onInputChange() {
    if (this.name.length > 0 && this.name.length < 6) {
      this.personaje$ = this.personajeServise.getpersonajes(
        this.name,
        this.cantida
      );
    } else if (this.name.length == 0) {
      this.personaje$ = this.personajeServise.getpersonajes(
        this.name,
        this.cantida
      );
    }
  }

  inforPersonaje(id: String) {
    this.router.navigate(['/personaje', id]);
  }
}
