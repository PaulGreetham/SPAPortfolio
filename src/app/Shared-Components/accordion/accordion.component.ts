import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItem } from '../../Pages/tech/tech.component';
import { AccordionItemContent } from '../../Pages/tech/tech.component';


@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() accordionItems: AccordionItem[] = [];

  openSection: string | null = null;

  isStringContent(content: AccordionItemContent): content is string {
    return typeof content === 'string';
  }

  toggleSection(section: string) {
    this.openSection = (this.openSection === section) ? null : section;
  }
}
