import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // persona:Persona[];
  constructor(private http: HttpClient) { }

  Url = 'http://localhost:9099/ejemplo01/personas';

  getPersonas() {
    return this.http.get<Persona[]>(this.Url);
  }
}
