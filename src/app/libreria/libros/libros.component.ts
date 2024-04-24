import { Component, OnInit, ViewContainerRef, computed, input, signal, viewChild } from '@angular/core';
import { Libro } from '../libreria.component';
import { LibroComponent } from '../libro/libro.component';
import { FooterComponent } from '../../footer/footer.component';
import { PlaceholderComponent } from '../../placeholder/placeholder.component';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  standalone: true,
  imports: [LibroComponent, FooterComponent, PlaceholderComponent]
})
export class LibrosComponent implements OnInit {
  libros = input<Libro[]>([]);

  search = signal('');

  librosFiltrados = computed(() =>
    this.libros()?.filter((l: Libro) =>
      l.name.toLocaleLowerCase().includes(this.search().toLocaleLowerCase()))
  );

  show = true;

  container = viewChild.required<ViewContainerRef>('container');

  async ngOnInit(): Promise<void> {
    /* const { FooterComponent } = await import('../../footer/footer.component');
    this.container()?.createComponent(FooterComponent); */

    /**
     * Cuando podemos usar las @defer
     *
     * 1. Con standalone components
     * 2. Componentes anexos a esos, pueden ser o standalone o NgModule
     * 3. No viewChild()
     *
     */

    /**
     * Formas de controlar cuando cargar los recursos
     *
     * 1. trigger
     * 2. prefetch
     *
     */
  }

  actualizarLibros(event: Event): void {
    this.search.set((event.target as any).value);
  }
}
