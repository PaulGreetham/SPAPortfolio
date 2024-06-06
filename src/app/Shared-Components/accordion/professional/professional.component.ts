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
  type: 'Front-End' | 'Back-End' | 'Testing' | 'Full-Stack';
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
    jobTitle: 'Full-Stack Software Developer',
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
      title: 'Stop risk text from overlapping info icon',
      type: 'Front-End',
      description: 'This commit adds a background to the info icon in the navigation bar to prevent the risk text from overlapping it.'
    },
    {
      title: 'Tirgger autofocus on variable specific tabs for all users',
      type: 'Front-End',
      description: 'Currently, only the creator can trigger autofocus on the tabs. This commit changes the behavior to allow all users to trigger autofocus on the tabs.'
    },
    {
      title: 'Change enter button and style of comment input',
      type: 'Front-End',
      description: 'This commit changes the text area to an input field, changes the button to an icon and allows the user to press Enter key to save the comment.'
    },
    {
      title: 'Add test for qr code modal component',
      type: 'Testing',
      description: 'Adding component test as part of new main feature.'
    },
    {
      title: 'Remove participant ability to archive risk',
      type: 'Front-End',
      description: 'This commit removes the ability for a participant to archive a risk. This is because the participant should not be able to archive a risk, only the faciliatator.'
    },
    {
      title: 'Amend date positioning so longer text does not affect format',
      type: 'Front-End',
      description: 'This commit amends the date positioning so that longer text does not affect the display format.'
    },
    {
      title: 'Create and fix the explainer component styling and modal',
      type: 'Front-End',
      description: 'Create new explainer component and change display modal depending on which tab is active.'
    },
    {
      title: 'Enable facilitator back button function',
      type: 'Front-End',
      description: 'This commit enables the facilitator to click on the left-chevron icon which navigates the user back to the previous project page.'
    },
    {
      title: 'Enable input validation and add group modal component tests',
      type: 'Front-End',
      description: 'The group modal component now has input validation and tests to ensure that the component works as expected, including notOnlyWhitespace validation.'
    },
    {
      title: 'Improve visual calrity of feature section',
      type: 'Front-End',
      description: 'This commit amends the styling for the masonary section within the feature app.'
    },
    {
      title: 'Add tests for navigation-tabs component',
      type: 'Testing',
      description: 'This commit fixes the issue where the autocomplete dropdown was not clickable when the dropdown was wider than the input field.'
    },
    {
      title: 'Add component tests for profile-modal component',
      type: 'Testing',
      description: 'App used legacy node-excel-export dependency. This commit replaces it with the more modern xlsx dependency.'
    },
    {
      title: 'Add component tests for finished-page component',
      type: 'Testing',
      description: 'Disabled button when variable is enabled. This commit removes the button from the UI when the variable is enabled.'
    },
    {
      title: 'Add component tests for variable-modal component',
      type: 'Testing',
      description: 'This commit adds component tests for the variable modal component.'
    },
    {
      title: 'Update english translation of file to register',
      type: 'Back-End',
      description: 'This commit changes the English translation of file to register. It changes the tranlsation files, tests and also the database seeds. It also changes the other project types file to register.'
    },
    {
      title: 'Remove description button when Fine/Kinney&Wiruth is enabled',
      type: 'Front-End',
      description: 'The remove descriptions button is still visible (and working) in the quantifiers setup when the impact formula Fine / Kinney&Wiruth is used, while the use of descriptions is mandatory.'
    },
    {
      title: 'Ensure browser language preference is used when opening app',
      type: 'Back-End',
      description: 'This commit ensures that the browser language preference is used when opening the app. If the browser language preference is not supported, then the default language will be used.'
    },
    {
      title: 'Replace node-excel-export dependency with xlsx',
      type: 'Back-End',
      description: 'We use the node-excel-export package for legacy relatics exporter. This package has not been updated for several years, same for the used dependencies. This leads to some vulnerabilities being present in this package.'
    },
    {
      title: 'Change color of all delete buttons to danger red',
      type: 'Front-End',
      description: 'All delete buttons were not defined as danger buttons. User feedback was that they were not visible enough. This commit changes the color of all delete buttons to danger red.'
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
