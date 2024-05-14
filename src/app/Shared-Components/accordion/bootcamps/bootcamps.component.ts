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
      name: '</SALT>',
      url: 'https://www.salt.dev',
      startDate: 'January 2023',
      endDate: 'March 2023',
      location: 'Amsterdam, Netherlands',
      info: '</SALT> was an intensive full-time 13-week full-satck software developement bootcamp that focussed on Agile group programming. Subjects and tools used include:',
      contentList: this.splitContent('HTML * CSS & SCSS * JavaScript * TypeScript * React * Redux * Node.js * MongoDB * Express * RESTful APIs * Jest * Cypress * TDD * e2e Testing * CI/CD * Babel * GitHub * VS Code')
    },
    {
      logo: '/assets/logos/LeWagon.png',
      name: 'Le Wagon Amsterdam',
      url: 'https://www.lewagon.com/amsterdam',
      startDate: 'July 2022',
      endDate: 'September 2022',
      location: 'Amsterdam, Netherlands',
      info: 'Le Wagon was an intensive full-time 9-week full-stack web development bootcamp that focused on pair programming. Subjects and tools used include:',
      contentList: this.splitContent('HTML * CSS & SCSS * JavaScript * Ruby * Ruby on Rails * Bootstrp * SQL * RESTful APIs * MVC Principles * VS Code * GitHub * Heroku * AirBnB Clone * Pair Coding * Responsive * Mobile First * AJAX * Figma')
    },
  ];

  splitContent(content: string): string[] {
    return content.split('*');
  }
}
