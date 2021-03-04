import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() { }

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe( valor => {
      /* console.log('debouncer:', valor); */
      this.onDebounce.emit(valor);
    })
  }

  Buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){/* event: any, esto iría como parámetro */
    /* const valor = event.target.value;

    console.log(valor);
    console.log(this.termino); */
    this.debouncer.next(this.termino);
  }
}
