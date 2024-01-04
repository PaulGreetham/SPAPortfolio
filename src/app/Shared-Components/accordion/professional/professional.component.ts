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

export interface GitCommit {
  title: string;
  type: 'Front-End' | 'Back-End' | 'Full-Stack';
  description: string;
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

  gitCommits: GitCommit[] = [
    {
      title: 'Change color of all delete buttons to danger red',
      type: 'Front-End',
      description: 'All delete buttons through the app were too similar to the other buttons. This commit changed the color of all delete buttons to danger red.'
    },
    {
      title: 'Enable full width of autocomplete to be clickable',
      type: 'Front-End',
      description: 'This commit fixes the issue where the autocomplete dropdown was not clickable when the dropdown was wider than the input field.'
    },
    {
      title: 'Replace node-excel-export dependency with xlsx',
      type: 'Back-End',
      description: 'App used legacy node-excel-export dependency. This commit replaces it with the more modern xlsx dependency.'
    },
    {
      title: 'Remove description button when variable is enabled',
      type: 'Front-End',
      description: 'Disabled button when variable is enabled. This commit removes the button from the UI when the variable is enabled.'
    },
    {
      title: 'Create custom export file functionality',
      type: 'Full-Stack',
      description: 'Created new export types as well as customer customised export functionality. Redesinged 3rd part export functionality.'
    },
    {
      title: 'Change translation key within variable modal',
      type: 'Front-End',
      description: 'Inaccurate tranlation key for part of app was causing confusion. This commit changes the translation key to the correct one.'
    },
    {
      title: 'Enable unselect button to unselect all options within modal',
      type: 'Front-End',
      description: 'Within a modal, the unselect button as not working properly. This commit fixes the issue so the button works as expected.'
    },
    {
      title: 'Reposition tab section on homepage from toolbar to above main section',
      type: 'Front-End',
      description: 'The tab section on the homepage was not in a suitable position. This commit moves the tab section to a more obvious position.'
    },
    {
      title: 'Create clearer user message for failed file merge',
      type: 'Front-End',
      description: 'Created new page, modal and UI for a cleaerer UX when failed action by user.'
    },
    {
      title: 'Add ellipsis to modal button text',
      type: 'Front-End',
      description: 'Text was too long for modal button. This commit adds ellipsis to the text to make it fit.'
    },
    {
      title: 'Add file deletion information modal',
      type: 'Full-Stack',
      description: 'When a file is deleted, the user was not informed. This commit adds a modal to inform the user of the deletion.'
    },
    {
      title: 'Increase space above log-out button',
      type: 'Front-End',
      description: 'This commit add a block margin to the button to increase the spacing.'
    },
    {
      title: 'Commit Title 2',
      type: 'Front-End',
      description: 'Description of what was done in Commit 2...'
    },
    {
      title: 'Commit Title 1',
      type: 'Front-End',
      description: 'Description of what was done in Commit 1...'
    },
    {
      title: 'Commit Title 2',
      type: 'Front-End',
      description: 'Description of what was done in Commit 2...'
    },
    {
      title: 'Commit Title 1',
      type: 'Front-End',
      description: 'Description of what was done in Commit 1...'
    },
    {
      title: 'Commit Title 2',
      type: 'Front-End',
      description: 'Description of what was done in Commit 2...'
    },
    {
      title: 'Commit Title 1',
      type: 'Front-End',
      description: 'Description of what was done in Commit 1...'
    },
    {
      title: 'Commit Title 2',
      type: 'Front-End',
      description: 'Description of what was done in Commit 2...'
    },
    {
      title: 'Commit Title 1',
      type: 'Front-End',
      description: 'Description of what was done in Commit 1...'
    },
    {
      title: 'Commit Title 2',
      type: 'Front-End',
      description: 'Description of what was done in Commit 2...'
    },
  ];
}
