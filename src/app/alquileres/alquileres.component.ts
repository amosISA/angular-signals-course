import { Component, effect, model, output } from '@angular/core';
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
  alquiler = model<Alquileres | string>(Alquileres.libreria);
  titleColor = output<string>();

  constructor() {
    effect(() => {
      const color = this.alquiler() === Alquileres.libreria ? 'black' : 'red';
      this.titleColor.emit(color);
    });
  }
}
