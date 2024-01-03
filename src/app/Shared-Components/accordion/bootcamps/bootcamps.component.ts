import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bootcamps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bootcamps.component.html',
  styleUrl: './bootcamps.component.scss'
})
export class BootcampsComponent {
  bootcamps = [
    {
      logo: '/assets/logos/SALT.webp',
      name: '</SALT> School of Applied Learning Technology',
      url: 'https://www.salt.dev',
      startDate: 'January 2023',
      endDate: 'March 2023',
      location: 'Amsterdam, Netherlands',
      contentList: this.splitContent('JavaScript/TypeScript * Next.js * MongoDB * Node.js * Express * React Additional Info/Process/Build Tools:* Asynchronous coding using multiple RESTful APIs* Creating/working within a TDD + unit testing environment* Implementing CI/CD automation* Incorporating Sass for module/component led design* Using Babel for compiling* Mobile first design functionality')
    },
    {
      logo: '/assets/logos/LeWagon.png',
      name: 'Le Wagon Amsterdam',
      url: 'https://www.lewagon.com/amsterdam',
      startDate: 'July 2022',
      endDate: 'September 2022',
      location: 'Amsterdam, Netherlands',
      contentList: this.splitContent('HTML * CSS * Bootstrap *JavaScript ES6, *SQL, *git, *GitHub, *Heroku and *Ruby on Rails. Designed, implemented and shipped to production a clone of AirBnB and a Rails prototype of NaturEscape.')
    },
  ];

  splitContent(content: string): string[] {
    return content.split('*');
  }
}
