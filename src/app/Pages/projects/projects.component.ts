import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../Shared-Components/card/card.component';
import { ProjectCard } from '../../models/project-card.interface';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    imports: [
      CommonModule,
      CardComponent,
    ]
})
export class ProjectsComponent {
  protected cards: ProjectCard[] = [
    {
      id: 'card-1',
      title: 'Project wwwwhhhaaattt',
      description: 'Description 1',
      imageUrl: 'assets/images/project1.jpg',
      techStack: [
        { logoUrl: 'assets/logos/angular.png' },
        { logoUrl: 'assets/logos/typescript.png' },
        { logoUrl: 'assets/logos/css3.png' }
      ],
      websiteUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project1'
    },
    {
      id: 'card-2',
      title: 'Project 2',
      description: 'Description 2',
      imageUrl: 'assets/images/project1.jpg',
      techStack: [
        { logoUrl: 'assets/logos/angular.png' },
        { logoUrl: 'assets/logos/typescript.png' },
        { logoUrl: 'assets/logos/css.png' }
      ],
      websiteUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project1'
    },
    {
      id: 'card-3',
      title: 'One Hundered Squares',
      description: 'One Hundred Squares is a responsive Angular application that fetches and displays 100 posts from the jsonplaceholder API in a 10x10 grid of interactive squares.',
      imageUrl: '/assets/project-images/onehundredsquares.png',
      techStack: [
        { logoUrl: 'assets/logos/Angular.png' },
        { logoUrl: 'assets/logos/Typescript.png' },
        { logoUrl: 'assets/logos/CSS.png' }
      ],
      websiteUrl: 'https://onehundredsquares.netlify.app/',
      githubUrl: 'https://github.com/PaulGreetham/onehundredsquares'
    },
    {
      id: 'card-4',
      title: 'Project 4',
      description: 'Description 4',
      imageUrl: 'assets/images/project1.jpg',
      techStack: [
        { logoUrl: 'assets/logos/angular.png' },
        { logoUrl: 'assets/logos/typescript.png' },
        { logoUrl: 'assets/logos/css3.png' }
      ],
      websiteUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project1'
    },
    {
      id: 'card-5',
      title: 'Project 5',
      description: 'Description 5',
      imageUrl: 'assets/images/project1.jpg',
      techStack: [
        { logoUrl: 'assets/logos/angular.png' },
        { logoUrl: 'assets/logos/typescript.png' },
        { logoUrl: 'assets/logos/css3.png' }
      ],
      websiteUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project1'
    },
    {
      id: 'card-6',
      title: 'Project 6',
      description: 'Description 6',
      imageUrl: 'assets/images/project1.jpg',
      techStack: [
        { logoUrl: 'assets/logos/angular.png' },
        { logoUrl: 'assets/logos/typescript.png' },
        { logoUrl: 'assets/logos/css3.png' }
      ],
      websiteUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project1'
    },
  ];
}
