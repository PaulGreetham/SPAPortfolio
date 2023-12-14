import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "../../Shared-Components/accordion/accordion.component";
@Component({
    selector: 'app-experience',
    standalone: true,
    templateUrl: './tech.component.html',
    styleUrl: './tech.component.scss',
    imports: [CommonModule, AccordionComponent]
})
export class TechComponent {
  techAccordionItems = [
    { title: 'Stack & Tools', content: 'Content 1 here' },
    { title: 'Education', content: 'Content 2 here' },
    { title: 'Bootcamps', content: 'Content 3 here' },
    { title: 'Professional', content: 'Content 4 here' }
  ];
}
