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
        { name: 'Angular', logoUrl: 'assets/logos/angular.png' },
        { name: 'TypeScript', logoUrl: 'assets/logos/typescript.png' },
        { name: 'CSS', logoUrl: 'assets/logos/css3.png' }
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
        { name: 'Angular', logoUrl: 'assets/logos/angular.png' },
        { name: 'TypeScript', logoUrl: 'assets/logos/typescript.png' },
        { name: 'CSS', logoUrl: 'assets/logos/css3.png' }
      ],
      websiteUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project1'
    },
    {
      id: 'card-3',
      title: 'Project 3',
      description: 'Description 3',
      imageUrl: '/assets/project-images/onehundredsquares.png',
      techStack: [
        { name: 'Angular', logoUrl: 'assets/logos/angular.png' },
        { name: 'TypeScript', logoUrl: 'assets/logos/typescript.png' },
        { name: 'CSS', logoUrl: 'assets/logos/css3.png' }
      ],
      websiteUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project1'
    },
    {
      id: 'card-4',
      title: 'Project 4',
      description: 'Description 4',
      imageUrl: 'assets/images/project1.jpg',
      techStack: [
        { name: 'Angular', logoUrl: 'assets/logos/angular.png' },
        { name: 'TypeScript', logoUrl: 'assets/logos/typescript.png' },
        { name: 'CSS', logoUrl: 'assets/logos/css3.png' }
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
        { name: 'Angular', logoUrl: 'assets/logos/angular.png' },
        { name: 'TypeScript', logoUrl: 'assets/logos/typescript.png' },
        { name: 'CSS', logoUrl: 'assets/logos/css3.png' }
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
        { name: 'Angular', logoUrl: 'assets/logos/angular.png' },
        { name: 'TypeScript', logoUrl: 'assets/logos/typescript.png' },
        { name: 'CSS', logoUrl: 'assets/logos/css3.png' }
      ],
      websiteUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/project1'
    },
  ];
}
