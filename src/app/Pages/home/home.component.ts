import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name = 'Paul Greetham';
  lettersWithDelay: Array<{ letter: string, delay: string } | 'BR'> = [];

  constructor() {
    let delay = 3;
    const increment = 0.1;

    for (const char of this.name) {
      if (char === ' ') {
        this.lettersWithDelay.push('BR');
      } else {
        this.lettersWithDelay.push({ letter: char, delay: `${delay}s` });
        delay += increment;
      }
    }
  }
}
