import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from "../../modal/modal.component";
import { CommonModule } from '@angular/common';

export interface JobReference {
  logoUrl: string;
  companyName: string;
  companyWebsite: string;
  jobTitle: string;
  contract: string;
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
    contract: 'Permanent | Full-Time',
    startDate: 'April 2023',
    endDate: 'Present',
    location: 'Amersfoort, The Netherlands',
    info: 'RiskChallenger is a SaaS scale-up specialising in risk management software. Clients include Boskalis, Van Gelder, Van Oord, Alliander, Count & Cooper, as well as various Ministries of the Netherlands. Key information about thhe role:',
    dutiesAndTools: ['Using Angular & TypeScript', 'Duty 2', 'Tool A', 'Tool B'],
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
      description: 'All delete buttons throughout the app were too similar to the submit buttons. This commit changed the color of all delete buttons to danger red.'
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
      description: 'Created new export types as well as customer customised export functionality. Redesinged 3rd party export functionality.'
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
      title: 'Create whitespace validator library and unify pin error message',
      type: 'Full-Stack',
      description: 'When a user enters a pin, the error message was not clear. This commit creates a new library to validate whitespace and unifies the error message.'
    },
    {
      title: 'Increase toast display time',
      type: 'Front-End',
      description: 'Feedback is that the toast messages were not visible long enough. This commit increases the display time of all toast message popups.'
    },
    {
      title: 'Add space between language picker and dropdown menu',
      type: 'Front-End',
      description: 'The dropdown menu for the language picker overlaps the dropdown options and chevron. This commit adds space between the language picker and the dropdown menu.'
    },
    {
      title: 'Create new logged-out page after user session ends',
      type: 'Front-End',
      description: 'When a user session ends, the user is redirected to the login page. This commit creates a new page to inform the user that their session has ended.'
    },
    {
      title: 'Resize loading spinner due to safari browser limitations',
      type: 'Front-End',
      description: 'When the loading spinner was displayed, it was not visible in Safari browsers. This commit resizes the spinner to be visible in Safari browsers.'
    },
    {
      title: 'Add double click function to open modal',
      type: 'Front-End',
      description: 'Add double click function to open modal, instead of having to click on the open button.'
    },
    {
      title: 'Align open and collapse chevron in admin sidebar',
      type: 'Front-End',
      description: 'Within the admin sidebar, the open and collapse chevron were not aligned. This commit aligns the chevron to be in the same position.'
    },
    {
      title: 'Translate string none to different languages',
      type: 'Back-End',
      description: 'The string none was not translated in different languages. This commit adds the translation for the string none in different languages.'
    },
    {
      title: 'Resize loading spinner due to safari browser limitations',
      type: 'Front-End',
      description: 'When the loading spinner was displayed, it was not visible in Safari browsers. This commit resizes the spinner to be visible in Safari browsers.'
    },
    {
      title: 'Remove ability to add decimal places to project deadline reminder',
      type: 'Front-End',
      description: 'The project deadline reminder was accepting decimal places. This commit removes the ability to add decimal places to the project deadline reminder.'
    },
    {
      title: 'Prevent overlap of dashboard statistics numbers',
      type: 'Front-End',
      description: 'When the dashboard statistics numbers were displayed, they overlapped. This commit prevents the overlap of the dashboard statistics numbers.'
    },
    {
      title: 'Add space to left of searchbox to make entire border visible',
      type: 'Front-End',
      description: 'The searchbox was not visible on the left side. This commit adds space to the left of the searchbox to make the entire border visible.'
    },
    {
      title: 'Add loading spinner to index and project',
      type: 'Front-End',
      description: 'When the index or project page was loading, there was no loading spinner. This commit adds a loading spinner to the index and project page.'
    },
    {
      title: 'Change component selectors and filenames to be more consistent',
      type: 'Back-End',
      description: 'The component selectors and filenames were not consistent. This commit changes the selectors and filenames to be more consistent.'
    },
    {
      title: 'Align multi-line labels in selector component',
      type: 'Front-End',
      description: 'Within the selector component, the multi-line labels were not aligned. This commit aligns the labels to be in the same position.'
    },
    {
      title: 'Update mce, heatmap and brainstorm labels',
      type: 'Back-End',
      description: 'Updated the labels for a number of apps to be more accurate, in English, Dutch and German.'
    },
    {
      title: 'Fix spacing in risk filter pane',
      type: 'Front-End',
      description: 'The spacing in the risk filter pane was not correct. This commit fixes the spacing in the risk filter pane.'
    },
    {
      title: 'Add brainstorm risk delete button',
      type: 'Front-End',
      description: 'Brainstorm risk delete button was missing. This commit adds it back.'
    },
    {
      title: 'Increase workspace-switcher width',
      type: 'Front-End',
      description: 'Increased the width of the workspace-switcher to fit the text.'
    },
    {
      title: 'Added space for session location',
      type: 'Front-End',
      description: 'Space added to session location for better UI functionality.'
    },
  ];
}
