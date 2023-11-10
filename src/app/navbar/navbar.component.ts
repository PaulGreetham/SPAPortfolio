import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sectionChange = new EventEmitter<string>();

  selectSection(section: string) {
    this.sectionChange.emit(section);
  }
}
