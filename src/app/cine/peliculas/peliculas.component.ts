import { Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../cine.component';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  standalone: true,
})
export class PeliculasComponent {
  films = input<Film[]>([]);

  search = signal('');

  filmsFiltrados = computed(() =>
    this.films()?.filter((l: Film) =>
      l.name.toLocaleLowerCase().includes(this.search().toLocaleLowerCase()))
  );

  actualizarFilms(event: Event): void {
    this.search.set((event.target as any).value);
  }
}
