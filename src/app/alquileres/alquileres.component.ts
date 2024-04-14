import { Component, EventEmitter, Input, Output, model } from '@angular/core';
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
export class AlquileresComponent {
  /* @Input() alquiler = Alquileres.libreria;

  @Output() alquilerChange = new EventEmitter(); */

  alquiler = model<Alquileres | string>(Alquileres.libreria);
}
