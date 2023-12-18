import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "../../Shared-Components/accordion/accordion.component";

export interface ToolItem {
  name: string;
  logo: string;
  url: string;
}

export type AccordionItemContent = string | {
  frequentlyUsed: ToolItem[];
  infrequentlyUsed: ToolItem[];
};

export interface AccordionItem {
  title: string;
  content: AccordionItemContent;
}

@Component({
    selector: 'app-experience',
    standalone: true,
    templateUrl: './tech.component.html',
    styleUrl: './tech.component.scss',
    imports: [CommonModule, AccordionComponent]
})
export class TechComponent {
  techAccordionItems: AccordionItem[] = [
    {
      title: 'Stack & Tools',
      content: {
        frequentlyUsed: [
          { name: 'Angular', logo: '/assets/logos/Angular.png', url: 'https://angular.dev/' },
          { name: 'TypeScript', logo: '/assets/logos/Typescript.png', url: 'https://www.typescriptlang.org/' },
          { name: 'JavaScript', logo: '/assets/logos/Javascript.png', url: 'https://www.javascript.com/' },
          { name: 'Node.js', logo: '/assets/logos/Node.png', url: 'https://nodejs.org/en' },
          { name: 'HTML', logo: '/assets/logos/HTML.png', url: 'https://en.wikipedia.org/wiki/HTML'},
          { name: 'CSS', logo: '/assets/logos/CSS.png', url: 'https://en.wikipedia.org/wiki/CSS' },
          { name: 'SCSS', logo: '/assets/logos/SCSS.png', url: 'https://sass-lang.com/' },
          { name: 'GitLab', logo: '/assets/logos/Gitlab.png', url: 'https://about.gitlab.com/' },
          { name: 'Github', logo: '/assets/logos/Github.png', url: 'https://github.com/' },
          { name: 'Jest', logo: '/assets/logos/Jest.png', url: 'https://jestjs.io/' },
          { name: 'Cypress', logo: '/assets/logos/Cypress.png', url: 'https://www.cypress.io/' },
          { name: 'VS Code', logo: '/assets/logos/VSCode.png', url: 'https://code.visualstudio.com/' },
        ],
        infrequentlyUsed: [
          { name: 'React', logo: '/assets/logos/React.png', url: 'https://react.dev/' },
          { name: 'Ruby', logo: '/assets/logos/Ruby.png', url: 'https://www.ruby-lang.org/en/' },
          { name: 'Rails', logo: '/assets/logos/Rails.png', url: 'https://rubyonrails.org/' },
          { name: 'Next', logo: '/assets/logos/Next.png', url: 'https://nextjs.org/' },
          { name: 'MongoDB', logo: '/assets/logos/MongoDB.png', url: 'https://www.mongodb.com/' },
          { name: 'Docker', logo: '/assets/logos/Docker.png', url: 'https://www.docker.com/' },
          { name: 'SQL', logo: '/assets/logos/SQL.png', url: 'https://en.wikipedia.org/wiki/SQL' },
          { name: 'Bootstrap', logo: '/assets/logos/Bootstrap.png', url: 'https://getbootstrap.com/' },
          { name: 'AJAX', logo: '/assets/logos/AJAX.png', url: 'https://en.wikipedia.org/wiki/Ajax_(programming)' },
          { name: 'Mocha', logo: '/assets/logos/Mocha.png', url: 'https://mochajs.org/' },
          { name: 'Chai', logo: '/assets/logos/Chai.png', url: 'https://www.chaijs.com/' },
        ]
      }
    },
    // ... other accordion items
    { title: 'Education', content: 'Content 2 here' },
    { title: 'Bootcamps', content: 'Content 3 here' },
    { title: 'Professional', content: 'Content 4 here' }
  ];
}
