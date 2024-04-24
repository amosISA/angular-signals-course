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
    { name: 'El día de mañana', id: 1 },
    { name: 'Arrival', id: 2 },
    { name: 'El diario de noa', id: 3 },
    { name: 'Interestelar', id: 4 },
    { name: 'La La Land', id: 5 },
    { name: 'El Padrino', id: 6 },
    { name: 'Titanic', id: 7 },
    { name: 'Pulp Fiction', id: 8 },
    { name: 'El Rey León', id: 9 },
    { name: 'Matrix', id: 10 },
    { name: 'El Señor de los Anillos: La Comunidad del Anillo', id: 11 },
    { name: 'Forrest Gump', id: 12 },
    { name: 'El club de la pelea', id: 13 },
    { name: 'El Gran Lebowski', id: 14 },
    { name: 'El origen', id: 15 },
    { name: 'Cadena perpetua', id: 16 },
    { name: 'El silencio de los corderos', id: 17 },
    { name: 'El resplandor', id: 18 },
    { name: 'El laberinto del fauno', id: 19 },
    { name: 'El sexto sentido', id: 20 },
    { name: 'Gladiador', id: 21 },
    { name: 'La lista de Schindler', id: 22 },
    { name: 'Volver al futuro', id: 23 }
  ]);

  add(): void {
    if (this.films().length === 4) {
      return;
    }

    this.films.update(libros => [...libros, {
      name: 'Mr Bean',
      id: 24
    }]);
  }
}
