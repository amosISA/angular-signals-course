import { Component, signal } from '@angular/core';
import { PeliculasComponent } from './peliculas/peliculas.component';

export interface Film {
  name: string;
  id: number;
}

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  standalone: true,
  imports: [PeliculasComponent]
})
export class CineComponent {
  films = signal<Film[]>([
    {
      name: 'El día de mañana',
      id: 1
    },
    {
      name: 'Arrival',
      id: 2
    },
    {
      name: 'El diario de noa',
      id: 3
    }
  ]);

  add(): void {
    if (this.films().length === 4) {
      return;
    }

    this.films.update(libros => [...libros, {
      name: 'Mr Bean',
      id: 4
    }]);
  }
}
