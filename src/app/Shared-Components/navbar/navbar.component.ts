import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule]
})
export class NavbarComponent {
  @Output() sectionChange = new EventEmitter<string>();

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]); // Use Router to navigate
  }
}
