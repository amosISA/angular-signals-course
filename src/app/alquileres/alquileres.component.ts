import { Component, EventEmitter, Output, effect, model, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alquileres } from '../app.component';
import { outputFromObservable, outputToObservable } from '@angular/core/rxjs-interop';
import { interval, of } from 'rxjs';

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
  debugTitleColor$ = outputToObservable(this.titleColor);

  itemsList$ = of([1, 2, 3, 4]);
  itemsToOutput = outputFromObservable(this.itemsList$);

  constructor() {
    effect(() => {
      const color = this.alquiler() === Alquileres.libreria ? 'black' : 'red';
      this.titleColor.emit(color);
    });

    // 2 nuevas funcionalidades
    // 1. outputToObservable
    this.debugTitleColor$.subscribe({
      next: () => {}
    });

    // 2. outputFromObservable
  }
}
