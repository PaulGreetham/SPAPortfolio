import { Component } from '@angular/core';
import { Qualification, onlineQualification } from '../../../models/qualification.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  imports: [
    CommonModule
  ]
})

export class EducationSectionComponent {
  formalEducations: Qualification[] = [
    {
      name: "Manchester Metropolitan University",
      url: "https://www.mmu.ac.uk/",
      logo: "/assets/logos/MMUlogo.png",
      qualification: {
        degree: "BA(Hons) English Literature & Language",
        grade: "2:1",
      },
      startDate: "September 2003",
      endDate: "June 2006",
      location: "Manchester, UK",
    },
  ];
  onlineCourses: onlineQualification[] = [
    {
      name: "Reactive Angular Course (RxJs, Angular 17)",
      url: "https://www.udemy.com/certificate/UC-d0630dce-71a4-467b-bf9f-e76d585ba4ab/",
      logo: "/assets/logos/Udemy.png",
      date: 'May 2024'
    },
    {
      name: "Angular - The Complete Guide (2023 Edition)",
      url: "https://www.udemy.com/certificate/UC-d0630dce-71a4-467b-bf9f-e76d585ba4ab/",
      logo: "/assets/logos/Udemy.png",
      date: 'April 2023'
    },
    {
      name: "Learn Intermediate TypeScript",
      url: "https://www.codecademy.com/profiles/PaulGreetham/certificates/84f728978e434c02a78abaa0baca0d6c",
      logo: "/assets/logos/Codecademy.png",
      date: 'January 2023'
    },
    {
      name: "Learn CSS: Responsive Design",
      url: "https://www.codecademy.com/profiles/PaulGreetham/certificates/3a62023b0054dc793edc0adecd715fd7",
      logo: "/assets/logos/Codecademy.png",
      date: 'November 2022'
    },
    {
      name: "Learn Express",
      url: "https://www.codecademy.com/profiles/PaulGreetham/certificates/85396dd6e2e850ab34e904243aa464c6",
      logo: "/assets/logos/Codecademy.png",
      date: 'November 2022'
    },
    {
      name: "Learn Node.js",
      url: "https://www.codecademy.com/profiles/PaulGreetham/certificates/240305d50b925c17868f1ac7a21a3261",
      logo: "/assets/logos/Codecademy.png",
      date: 'November 2022'
    },
    {
      name: "Learn Intermediate JavaScript",
      url: "https://www.codecademy.com/profiles/PaulGreetham/certificates/512386fdc7f6c934f98b01e6afa8285a",
      logo: "/assets/logos/Codecademy.png",
      date: 'November 2022'
    },
    {
      name: "Learn Color Design",
      url: "https://www.codecademy.com/profiles/PaulGreetham/certificates/0a6884fad1dbf4afe5df084d2ec1e7c3",
      logo: "/assets/logos/Codecademy.png",
      date: 'October 2022'
    },
    {
      name: "Introduction to UI and UX Design",
      url: "https://www.codecademy.com/profiles/PaulGreetham/certificates/4ccef8d532484ea2aeec3b3b3dbb4f9c",
      logo: "/assets/logos/Codecademy.png",
      date: 'October 2022'
    },
    {
      name: "Learn Ruby",
      url: "https://www.codecademy.com/profiles/PaulGreetham/certificates/1c05e0382bc5681c824c4cbe85c126fd",
      logo: "/assets/logos/Codecademy.png",
      date: 'September 2022'
    },
    {
      name: "Learn JavaScript",
      url: "https://www.codecademy.com/profiles/PaulGreetham/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
      logo: "/assets/logos/Codecademy.png",
      date: 'July 2022'
    },
    {
      name: "Learn CSS",
      url: "https://www.codecademy.com/profiles/PaulGreetham/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
      logo: "/assets/logos/Codecademy.png",
      date: 'June 2022'
    },
    {
      name: "Learn HTML",
      url: "https://www.codecademy.com/profiles/PaulGreetham/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
      logo: "/assets/logos/Codecademy.png",
      date: 'May 2022'
    },
  ];
}
