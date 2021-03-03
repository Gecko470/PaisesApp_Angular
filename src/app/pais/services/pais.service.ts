import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url );
  }
}
