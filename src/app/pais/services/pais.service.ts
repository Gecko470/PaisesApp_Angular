import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  /* En vez de hacer esto en cada llamada Http:

     const params: HttpParams = new HttpParams().set('fields', 'name;capital;alpha2code;flag;population');

     Utilizo el get y se lo pongo, {params: this.httpParams}, en las llamadas http que me interese */

  get httpParams(){
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url, {params: this.httpParams} );
  }

  buscarCapital(termino: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url, {params: this.httpParams} );
  }

  buscarCodigo(id: string): Observable<Country>{

    const url = `${ this.apiUrl }/alpha/${ id }`;

    return this.http.get<Country>( url );
  }

  buscarRegion(region: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/region/${ region }`;

    return this.http.get<Country[]>( url, {params: this.httpParams} ).pipe(tap(console.log));
  }
}
