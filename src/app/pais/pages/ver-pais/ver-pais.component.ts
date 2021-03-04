import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

    /* this.activatedRoute.params.subscribe( params => {
      console.log( params );También podríamos poner params.id o hacer la desestructuración {{id}}

      this.paisService.buscarCodigo(params.id).subscribe( pais => {
        console.log(pais);
      })
    }) */

    /* También puedo hacerlo así, con un operador de rxjs */
    this.activatedRoute.params.pipe( 
    switchMap( param => this.paisService.buscarCodigo(param.id) ), 
    tap(console.log) )
    .subscribe(respuesta => {
      this.pais = respuesta;
    })
  }

}
