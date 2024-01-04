import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from "../../modal/modal.component";
import { CommonModule } from '@angular/common';

export interface JobReference {
  logoUrl: string;
  companyName: string;
  companyWebsite: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  info: string;
  dutiesAndTools: string[];
}

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

  jobReference: JobReference = {
    logoUrl: '/assets/logos/RiskChallenger.jpeg',
    companyName: 'RiskChallenger',
    companyWebsite: 'https://www.riskchallenger.nl/',
    jobTitle: 'Junior Full-Stack Software Developer',
    startDate: 'April 2023',
    endDate: 'Present',
    location: 'Amersfoort, The Netherlands',
    info: 'A brief description of the role and responsibilities.',
    dutiesAndTools: ['Duty 1', 'Duty 2', 'Tool A', 'Tool B'],
  };

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
