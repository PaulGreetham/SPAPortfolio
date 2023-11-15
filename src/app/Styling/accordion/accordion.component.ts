import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  openSection: string | null = null;

  toggleSection(section: string) {
    this.openSection = (this.openSection === section) ? null : section;
  }
}