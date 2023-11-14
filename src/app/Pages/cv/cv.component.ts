import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "../../Styling/accordion/accordion.component";
@Component({
    selector: 'app-cv',
    standalone: true,
    templateUrl: './cv.component.html',
    styleUrl: './cv.component.scss',
    imports: [CommonModule, AccordionComponent]
})
export class CvComponent {

}
