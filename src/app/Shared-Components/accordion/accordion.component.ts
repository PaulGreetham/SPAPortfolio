import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItem } from '../../Pages/tech/tech.component';
import { AccordionItemContent } from '../../Pages/tech/tech.component';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() accordionItems: AccordionItem[] = [];

  openSection: string | null = null;
  openModalItem: string | null = null;
  showModal: boolean = false;
  activeToolsSection: 'frequentlyUsed' | 'infrequentlyUsed' | null = null;

  toggleSection(section: string) {
    this.openSection = (this.openSection === section) ? null : section;
    this.activeToolsSection = null; // Reset tools section when toggling accordion sections
  }

  setActiveToolsSection(section: 'frequentlyUsed' | 'infrequentlyUsed') {
    this.activeToolsSection = section;
  }

  isStringContent(content: AccordionItemContent): content is string {
    return typeof content === 'string';
  }

  toggleModal(itemTitle: string) {
    this.openModalItem = this.openModalItem === itemTitle ? null : itemTitle;
    // Assuming you want to allow only one modal to be open at a time
  }

  // Check if modal should be displayed for a given item
  isModalOpen(itemTitle: string): boolean {
    return this.openModalItem === itemTitle;
  }
}
