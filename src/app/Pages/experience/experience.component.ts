import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "../../Shared-Components/accordion/accordion.component";
@Component({
    selector: 'app-experience',
    standalone: true,
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss',
    imports: [CommonModule, AccordionComponent]
})
export class ExperienceComponent {

}