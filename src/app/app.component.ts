import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { TechComponent } from './Pages/tech/tech.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NavbarComponent } from "./Shared-Components/navbar/navbar.component";
import { CardComponent } from './Shared-Components/card/card.component';
import { ModalComponent } from './Shared-Components/modal/modal.component';
import { StackToolsComponent } from './Shared-Components/accordion/stack-tools/stack-tools.component';
import { ProfessionalComponent } from './Shared-Components/accordion/professional/professional.component';
import { BootcampsComponent } from './Shared-Components/accordion/bootcamps/bootcamps.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
      CommonModule,
      RouterOutlet,
      HomeComponent,
      AboutComponent,
      TechComponent,
      ModalComponent,
      ProjectsComponent,
      ContactComponent,
      NavbarComponent,
      CardComponent,
      StackToolsComponent,
      ProfessionalComponent,
      BootcampsComponent,
    ]
})
export class AppComponent {
  title = 'Paul Greetham Personal Website';
  selectedSection = 'home';
}
