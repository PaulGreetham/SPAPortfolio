import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name = 'Paul Greetham';
  subtitle = 'Frontend Software Developer';
  lettersWithDelay: Array<{ letter: string, delay: string } | 'BR'> = [];
  subtitleLettersWithDelay: Array<{ letter: string, delay: string }> = [];

  constructor() {
    this.initLettersWithDelay();
  }

  initLettersWithDelay() {
    let delay = 1; // Start delay for the name
    const increment = 0.08;

    for (const char of this.name) {
      if (char === ' ') {
        this.lettersWithDelay.push('BR');
      } else {
        this.lettersWithDelay.push({ letter: char, delay: `${delay}s` });
        delay += increment;
      }
    }

    // Additional delay before starting the subtitle
    delay += 1;

    for (const char of this.subtitle) {
      if (char !== ' ') {
        this.subtitleLettersWithDelay.push({ letter: char, delay: `${delay}s` });
      } else {
        // Handle space as a transparent letter
        this.subtitleLettersWithDelay.push({ letter: '\u00A0', delay: `${delay}s` }); // \u00A0 is a non-breaking space
      }
      delay += increment;
    }
  }
}
