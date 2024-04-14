import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
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
  imports: [LibreriaComponent, CineComponent, AlquileresComponent, NgOptimizedImage]
})
export class AppComponent {
  alquileres = signal(Alquileres.libreria);
  alquileresEnum = signal(Alquileres);
}
