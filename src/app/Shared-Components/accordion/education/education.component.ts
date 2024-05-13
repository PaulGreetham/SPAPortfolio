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
        degree: "Bachelor of Science in Computer Science"
      },
      startDate: "2015",
      endDate: "2019",
      location: "Example City, Country",
      info: "Details about the course and university experience.",
      contentList: [
        "Achieved a 4.0 GPA",
        "Completed a capstone project on software development",
        "Participated in student tech clubs"
      ]
    },
    {
      name: "Manchester Metropolitan University",
      url: "https://www.mmu.ac.uk/",
      logo: "/assets/logos/MMUlogo.png",
      qualification: {
        degree: "Bachelor of Science in Computer Science"
      },
      startDate: "2015",
      endDate: "2019",
      location: "Example City, Country",
      info: "Details about the course and university experience.",
      contentList: [
        "Achieved a 4.0 GPA",
        "Completed a capstone project on software development",
        "Participated in student tech clubs"
      ]
    },
  ];
  onlineCourses: onlineQualification[] = [
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
    {
      name: "Codecademy",
      url: "https://www.example.edu",
      logo: "assets/university-logo.png",
      qualification: "Full Stack Developer",
      date: 'September 2023'
    },
  ];
}
