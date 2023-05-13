import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character, CharacterDataWrapper } from '../Model/modelos';

@Injectable({
  providedIn: 'root',
})
export class PersonajeService {
  public URL_API =
    'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=438319bacea90eda5e63196fb9d40ead&hash=47872edd12836b960c5c45e89fd2faa7&limit=40';

  private name: BehaviorSubject<String> = new BehaviorSubject<String>('');
  constructor(public http: HttpClient) {}

  getpersonajes(nameStartsWith: String, cantida:number): Observable<CharacterDataWrapper> {
    if (nameStartsWith === '' && (cantida == 20 || !(cantida == 20))) {
       let URL_API = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=438319bacea90eda5e63196fb9d40ead&hash=47872edd12836b960c5c45e89fd2faa7&limit=${cantida}`;
      return this.http.get<CharacterDataWrapper>(URL_API);
    } else if (!(nameStartsWith === '' && cantida == 20)) {
      let URL_API = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameStartsWith}&ts=1&apikey=438319bacea90eda5e63196fb9d40ead&hash=47872edd12836b960c5c45e89fd2faa7&limit=${cantida}`;
      return this.http.get<CharacterDataWrapper>(URL_API);
    } else if (nameStartsWith.length > 1 && !(cantida == 20)) {
      let URL_API = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameStartsWith}&ts=1&apikey=438319bacea90eda5e63196fb9d40ead&hash=47872edd12836b960c5c45e89fd2faa7&limit=${cantida}`;
      return this.http.get<CharacterDataWrapper>(URL_API);
    } else {
      let URL_API = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameStartsWith}&ts=1&apikey=438319bacea90eda5e63196fb9d40ead&hash=47872edd12836b960c5c45e89fd2faa7&limit=20`;
      return this.http.get<CharacterDataWrapper>(URL_API);
    }
  }

  getpersonaje(id: String): Observable<CharacterDataWrapper> {
    let URL_API = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=438319bacea90eda5e63196fb9d40ead&hash=47872edd12836b960c5c45e89fd2faa7`;
    return this.http.get<CharacterDataWrapper>(URL_API);
  }

  get nameperson(): Observable<String> {
    return this.name.asObservable();
  }

  set newName(value: String) {
    this.name.next(value);
  }
}
