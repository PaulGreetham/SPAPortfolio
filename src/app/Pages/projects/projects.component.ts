import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../Shared-Components/card/card.component';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    imports: [CommonModule, CardComponent]
})
export class ProjectsComponent {
  protected cards = [
    { id: 'card-1', title: 'Project 1', description: 'Description 1' },
    { id: 'card-2', title: 'Project 2', description: 'Description 2' },
    { id: 'card-3', title: 'Project 3', description: 'Description 3' },
    { id: 'card-4', title: 'Project 4', description: 'Description 4' },
  ];
}
