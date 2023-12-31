import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = 'Paul Greetham';
  lettersWithDelay: Array<{ letter: string, delay: string } | 'BR'> = [];

  constructor() {
    let delay = 0;
    const increment = 0.15;

    for (const char of this.name) {
      if (char === ' ') {
        this.lettersWithDelay.push('BR');
        continue;
      }
      this.lettersWithDelay.push({ letter: char, delay: `${delay}s` });
      delay += increment;
    }
  }
}
