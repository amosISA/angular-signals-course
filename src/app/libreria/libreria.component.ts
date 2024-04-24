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
    { name: 'Cracking the Coding Interview', id: 1 },
    { name: 'Eloquent JavaScript', id: 2 },
    { name: 'Clean Code', id: 3 },
    { name: 'The Pragmatic Programmer', id: 4 },
    { name: 'Code Complete', id: 5 },
    { name: 'Design Patterns: Elements of Reusable Object-Oriented Software', id: 6 },
    { name: 'Refactoring: Improving the Design of Existing Code', id: 7 },
    { name: 'Head First Design Patterns', id: 8 },
    { name: 'JavaScript: The Good Parts', id: 9 },
    { name: 'Clean Architecture', id: 10 },
    { name: 'Test Driven Development: By Example', id: 11 },
    { name: 'Domain-Driven Design', id: 12 },
    { name: 'Programming Pearls', id: 13 },
    { name: 'Effective Java', id: 14 },
    { name: 'Algorithms (Sedgewick/Wayne)', id: 15 },
    { name: 'Structure and Interpretation of Computer Programs', id: 16 },
    { name: 'Python Crash Course', id: 17 },
    { name: 'Learning Python', id: 18 },
    { name: 'Crucial Conversations: Tools for Talking When Stakes Are High', id: 19 },
    { name: 'Soft Skills: The software developer\'s life manual', id: 20 },
    { name: 'Introduction to Algorithms', id: 21 },
    { name: 'The Mythical Man-Month', id: 22 },
    { name: 'Code: The Hidden Language of Computer Hardware and Software', id: 23 }
  ]);

  add(): void {
    if (this.libros().length === 4) {
      return;
    }

    this.libros.update(libros => [...libros, {
      name: '@codigotipado',
      id: 24
    }]);
  }
}
