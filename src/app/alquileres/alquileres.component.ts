import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, contentChild, contentChildren, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alquileres } from '../app.component';

@Component({
  selector: 'app-alquileres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alquileres.component.html',
  host: {
    class: 'flex mt-2 mb-2'
  }
})
export class AlquileresComponent implements OnInit, AfterContentInit {
  /* @Input() alquiler = Alquileres.libreria;

  @Output() alquilerChange = new EventEmitter(); */

  alquiler = model<Alquileres | string>(Alquileres.libreria);

  h1 = contentChildren('h1', { descendants: false });
  @ContentChild('h2', { descendants: true }) h2!: ElementRef;

  constructor() {
    console.log(this.h1()); // undefined
  }

  ngAfterContentInit(): void {
    console.log(this.h2);
  }

  ngOnInit(): void {
    console.log(this.h1());
  }
}
