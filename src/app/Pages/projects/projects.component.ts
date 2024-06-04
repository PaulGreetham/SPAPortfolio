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
      title: 'Workout Warrior',
      description: 'Workout Warrior allows users to search for exercise inspiration, log their gains, and watch workout videos from YouTube all in one place.',
      techStack: [
        { logoUrl: 'assets/logos/React.png' },
        { logoUrl: 'assets/logos/Javascript.png' },
        { logoUrl: 'assets/logos/Node.png' },
        { logoUrl: 'assets/logos/CSS.png' },
        { logoUrl: 'assets/logos/React.png' },
        { logoUrl: 'assets/logos/Javascript.png' },
        { logoUrl: 'assets/logos/Node.png' },
        { logoUrl: 'assets/logos/CSS.png' }
      ],
      websiteUrl: 'https://workout-warrior.netlify.app/',
      githubUrl: 'https://github.com/PaulGreetham/workout-warrior'
    },
    {
      id: 'card-2',
      title: 'Academic Profile',
      description: 'Description 2',
      techStack: [
        { logoUrl: 'assets/logos/Angular.png' },
        { logoUrl: 'assets/logos/Typescript.png' },
        { logoUrl: 'assets/logos/Node.png' },
        { logoUrl: 'assets/logos/SCSS.png' }
      ],
      websiteUrl: 'https://dagmarheinrich.netlify.app/',
      githubUrl: 'https://github.com/PaulGreetham/dagmarheinrich'
    },
    {
      id: 'card-3',
      title: 'One Hundered Squares',
      description: 'One Hundred Squares is a responsive Angular application that fetches and displays 100 posts from the jsonplaceholder API in a 10x10 grid of interactive squares.',
      techStack: [
        { logoUrl: 'assets/logos/Angular.png' },
        { logoUrl: 'assets/logos/Typescript.png' },
        { logoUrl: 'assets/logos/Node.png' },
        { logoUrl: 'assets/logos/SCSS.png' }
      ],
      websiteUrl: 'https://onehundredsquares.netlify.app/',
      githubUrl: 'https://github.com/PaulGreetham/onehundredsquares'
    },
    {
      id: 'card-4',
      title: 'Personal Website',
      description: 'Description 4',
      techStack: [
        { logoUrl: 'assets/logos/Angular.png' },
        { logoUrl: 'assets/logos/Typescript.png' },
        { logoUrl: 'assets/logos/Node.png' },
        { logoUrl: 'assets/logos/SCSS.png' }
      ],
      websiteUrl: 'https://paulgreetham.netlify.app/',
      githubUrl: 'https://github.com/PaulGreetham/SPAPortfolio'
    },
    {
      id: 'card-5',
      title: 'Project 5',
      description: 'Description 5',
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
