import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  Buscar(termino: string){

    this.hayError = false;
    /* console.log(this.termino); */
    this.termino = termino;
    
    this.paisService.buscarCapital(this.termino).subscribe( (respuesta) => {
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
  }
}
