import { Component, input } from '@angular/core';
import { Libro } from '../libreria.component';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  standalone: true,
})
export class LibroComponent {
  libro = input.required<Libro>();
}
