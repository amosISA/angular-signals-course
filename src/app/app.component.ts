import { Component, signal } from '@angular/core';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { LibreriaComponent } from './libreria/libreria.component';
import { CineComponent } from './cine/cine.component';
import { AlquileresComponent } from './alquileres/alquileres.component';

export enum Alquileres {
  libreria = 'libreria',
  peliculas = 'peliculas'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [LibreriaComponent, CineComponent, AlquileresComponent, NgOptimizedImage, NgStyle]
})
export class AppComponent {
  alquileres = signal(Alquileres.libreria);
  alquileresEnum = signal(Alquileres);
  titleColor = signal('black');
}
