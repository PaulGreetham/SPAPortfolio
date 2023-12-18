import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from "../../modal/modal.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-professional',
    standalone: true,
    templateUrl: './professional.component.html',
    styleUrls: ['./professional.component.scss'],
    imports: [CommonModule, ModalComponent]
})
export class ProfessionalComponent {
  @Input() item: any;
  @Output() modalToggle = new EventEmitter<boolean>();

  openModalItem: string | null = null;
  showModal = false;

  isModalOpen(itemTitle: string): boolean {
    return this.openModalItem === itemTitle;
  }

  toggleModal() {
    this.showModal = !this.showModal;
    this.modalToggle.emit(this.showModal);
  }
}
