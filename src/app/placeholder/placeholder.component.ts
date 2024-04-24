import { Component, input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  standalone: true,
})
export class PlaceholderComponent {
  text = input<string>('Loading...');
}
