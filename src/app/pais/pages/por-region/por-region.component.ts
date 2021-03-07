import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }

    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  activarRegion(region: string){

    if(this.regionActiva == region){
      return;
    }
    
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(region).subscribe(respuesta => {
      this.paises = respuesta;
    });

  }
 
  getClaseCSS(item: string): string{

    return (item === this.regionActiva)? 'btn-primary' : 'btn btn-outline-primary';

  }

}
