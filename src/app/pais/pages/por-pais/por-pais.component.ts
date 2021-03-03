import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  Buscar(termino: string){

    this.hayError = false;
    /* console.log(this.termino); */
    this.termino = termino;
    
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

}
