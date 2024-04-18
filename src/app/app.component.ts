import { AfterContentInit, AfterViewInit, Component, ElementRef, Injector, OnInit, TemplateRef, ViewChild, ViewChildren, ViewContainerRef, computed, contentChild, contentChildren, signal, viewChild, viewChildren } from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit {
  alquileres = signal(Alquileres.libreria);
  alquileresEnum = signal(Alquileres);

  // @ViewChild(LibreriaComponent) libreria!: LibreriaComponent;
  libreria = viewChild(LibreriaComponent);

  @ViewChildren('div') div!: ElementRef<HTMLDivElement>;
  div2 = viewChildren<ElementRef<HTMLDivElement>>('div');

  @ViewChild('vc', { read: ViewContainerRef }) container!: ViewContainerRef;
  container2 = viewChild<ViewContainerRef>('vc');

  appTitle = computed(() => {
    return this.libreria() ? 'Librería' : 'Cine';
  });

  ngOnInit(): void {
    console.log(this.div2());
    console.log('OnInit(libreria)', this.libreria());
    console.log('OnInit(div)', this.div);
  }

  ngAfterViewInit(): void {
    console.log(this.div2());
    console.log('AfterViewInit(libreria)', this.libreria());
    console.log('AfterViewInit(div)', this.div);
  }
}
