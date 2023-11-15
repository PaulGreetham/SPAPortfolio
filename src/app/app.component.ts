import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { CvComponent } from './Pages/experience/experience.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NavbarComponent } from "./Styling/navbar/navbar.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, HomeComponent, AboutComponent, CvComponent, ProjectsComponent, ContactComponent, NavbarComponent]
})
export class AppComponent {
  title = 'SPAPortfolio';
  selectedSection = 'home';
}
