import { Component, signal } from '@angular/core';
import { LibrosComponent } from './libros/libros.component';

export interface Libro {
  name: string;
  id: number;
}

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  standalone: true,
  imports: [LibrosComponent]
})
export class LibreriaComponent {
  libros = signal<Libro[]>([
    {
      name: 'Cracking the Coding Interview',
      id: 1
    },
    {
      name: 'Eloquent JavaScript',
      id: 2
    },
    {
      name: 'Clean Code',
      id: 3
    }
  ]);

  add(): void {
    if (this.libros().length === 4) {
      return;
    }

    this.libros.update(libros => [...libros, {
      name: 'The pragmatic programmer',
      id: 4
    }]);
  }
}
