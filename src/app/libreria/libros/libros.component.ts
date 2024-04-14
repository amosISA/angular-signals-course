import { Component, computed, input, signal } from '@angular/core';
import { Libro } from '../libreria.component';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  standalone: true,
})
export class LibrosComponent {
  libros = input<Libro[]>([]);

  search = signal('');

  librosFiltrados = computed(() =>
    this.libros()?.filter((l: Libro) =>
      l.name.toLocaleLowerCase().includes(this.search().toLocaleLowerCase()))
  );

  actualizarLibros(event: Event): void {
    this.search.set((event.target as any).value);
  }
}
