import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    
    `
    li{
      cursor: pointer;
    }

    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  Buscar(termino: string){

    this.hayError = false;
    /* console.log(this.termino); */
    this.termino = termino;
    this.mostrarSugerencias = false;
    
    this.paisService.buscarPais(this.termino).subscribe( (respuesta) => {
      console.log(respuesta);
      this.paises = respuesta;
    }, (err) => {
      /* console.log('Error');
      console.info(err); */
      this.hayError = true;
      this.paises = [];
    });

  }

  Sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino).subscribe( (respuesta) => {
      this.paisesSugeridos = respuesta.splice(0, 5);
    }, (err) => this.paisesSugeridos = [])
  }

  BuscarSugerido(termino: string){

    this.Buscar(termino);

  }
}
