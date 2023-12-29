import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItem } from '../../Pages/tech/tech.component';
import { AccordionItemContent } from '../../Pages/tech/tech.component';
import { ModalComponent } from '../modal/modal.component';
import { StackToolsComponent, ToolItem } from '../accordion/stack-tools/stack-tools.component';
import { ProfessionalComponent } from './professional/professional.component';
import { BootcampsComponent } from './bootcamps/bootcamps.component';

@Component({
    selector: 'app-accordion',
    standalone: true,
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    imports: [
      CommonModule,
      ModalComponent,
      StackToolsComponent,
      ProfessionalComponent,
      BootcampsComponent,
    ]
})
export class AccordionComponent {
  @Input() accordionItems: AccordionItem[] = [];

  openSection: string | null = null;
  openModalItem: string | null = null;
  showModal = false;
  activeToolsSection: 'frequentlyUsed' | 'infrequentlyUsed' | null = null;

  toggleSection(section: string) {
    this.openSection = (this.openSection === section) ? null : section;
    this.activeToolsSection = null;
  }

  setActiveToolsSection(section: 'frequentlyUsed' | 'infrequentlyUsed') {
    this.activeToolsSection = section;
  }

  isContentTypeTools(content: AccordionItemContent): content is { frequentlyUsed: ToolItem[]; infrequentlyUsed: ToolItem[]; } {
    return typeof content !== 'string';
  }

  toggleModal(itemTitle: string) {
    this.showModal = !this.showModal;
  }

  isModalOpen(itemTitle: string): boolean {
    return this.openModalItem === itemTitle;
  }

  isAnySectionOpen(): boolean {
    return this.openSection !== null;
  }

  handleProfessionalModalToggle(isOpen: boolean) {
    this.showModal = isOpen;
  }
}
