import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../../models/project-card.interface';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    imports: [
      CommonModule
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
        { logoUrl: 'assets/logos/Youtube.png' },
        { logoUrl: 'assets/logos/HTML.png' },
        { logoUrl: 'assets/logos/CSS.png' },
        { logoUrl: 'assets/logos/Github.png' },
        { logoUrl: 'assets/logos/Netlify.png' }
      ],
      websiteUrl: 'https://workout-warrior.netlify.app/',
      githubUrl: 'https://github.com/PaulGreetham/workout-warrior'
    },
    {
      id: 'card-2',
      title: 'Academic Profile',
      description: 'An profile website for a leading forensic anthropology and security science acedemic, that showcases their work and achievements.',
      techStack: [
        { logoUrl: 'assets/logos/Angular.png' },
        { logoUrl: 'assets/logos/RxJS.png' },
        { logoUrl: 'assets/logos/Typescript.png' },
        { logoUrl: 'assets/logos/Node.png' },
        { logoUrl: 'assets/logos/HTML.png' },
        { logoUrl: 'assets/logos/SCSS.png' },
        { logoUrl: 'assets/logos/Github.png' },
        { logoUrl: 'assets/logos/Netlify.png' }
      ],
      websiteUrl: 'https://dagmarheinrich.netlify.app/',
      githubUrl: 'https://github.com/PaulGreetham/dagmarheinrich'
    },
    {
      id: 'card-3',
      title: '100 Squares',
      description: '100 Squares is a responsive Angular application that fetches and displays 100 posts from the jsonplaceholder API in a 10x10 grid of interactive squares.',
      techStack: [
        { logoUrl: 'assets/logos/Angular.png' },
        { logoUrl: 'assets/logos/RxJS.png' },
        { logoUrl: 'assets/logos/Typescript.png' },
        { logoUrl: 'assets/logos/Node.png' },
        { logoUrl: 'assets/logos/HTML.png' },
        { logoUrl: 'assets/logos/SCSS.png' },
        { logoUrl: 'assets/logos/Github.png' },
        { logoUrl: 'assets/logos/Netlify.png' }
      ],
      websiteUrl: 'https://onehundredsquares.netlify.app/',
      githubUrl: 'https://github.com/PaulGreetham/onehundredsquares'
    },
    {
      id: 'card-4',
      title: 'Personal Website',
      description: 'This is my personal website (the one that you are currently viewing). It is a single page application that highlights my skills as a front-end developer.',
      techStack: [
        { logoUrl: 'assets/logos/Angular.png' },
        { logoUrl: 'assets/logos/RxJS.png' },
        { logoUrl: 'assets/logos/Typescript.png' },
        { logoUrl: 'assets/logos/Node.png' },
        { logoUrl: 'assets/logos/HTML.png' },
        { logoUrl: 'assets/logos/SCSS.png' },
        { logoUrl: 'assets/logos/Github.png' },
        { logoUrl: 'assets/logos/Netlify.png' }
      ],
      websiteUrl: 'https://paulgreetham.netlify.app/',
      githubUrl: 'https://github.com/PaulGreetham/SPAPortfolio'
    },
    {
      id: 'card-5',
      title: 'Host Idol',
      description: 'Host Idol is a dropshipping website made with Shopify. It is a fully functional e-commerce store that sells hosting items, such as BBQs & Smokers.',
      techStack: [
        { logoUrl: 'assets/logos/Shopify.png' },
        { logoUrl: 'assets/logos/Ruby.png' },
        { logoUrl: 'assets/logos/HTML.png' },
        { logoUrl: 'assets/logos/CSS.png' }
      ],
      websiteUrl: 'https://www.hostidol.shop/',
      githubUrl: 'https://github.com/example/project1'
    },
    {
      id: 'card-6',
      title: 'My Game Weather',
      description: 'A weather app for sports fans. It allows users to search for their favourite sports teams and view the weather forecast for their next 5 games.',
      techStack: [
        { logoUrl: 'assets/logos/Angular.png' },
        { logoUrl: 'assets/logos/RxJS.png' },
        { logoUrl: 'assets/logos/Typescript.png' },
        { logoUrl: 'assets/logos/Node.png' },
        { logoUrl: 'assets/logos/HTML.png' },
        { logoUrl: 'assets/logos/SCSS.png' },
        { logoUrl: 'assets/logos/Github.png' },
        { logoUrl: 'assets/logos/Netlify.png' }
      ],
      websiteUrl: '',
      githubUrl: ''
    },
  ];
}
