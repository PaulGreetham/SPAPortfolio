import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NavbarComponent } from "./Shared-Components/navbar/navbar.component";
import { CardComponent } from './Shared-Components/card/card.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, HomeComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, NavbarComponent, CardComponent]
})
export class AppComponent {
  title = 'SPAPortfolio';
  selectedSection = 'home';
}
